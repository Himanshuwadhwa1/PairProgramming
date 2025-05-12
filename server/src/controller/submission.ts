import axios, { AxiosResponse } from "axios";
import {Request,Response} from "express";
import { JUDGE_URL } from "../lib/env";
import { config } from "../lib/config";
interface CodeRequestBody {
    code: string;
    language : number;
}
export async function submOutput(req:Request<{},{},CodeRequestBody>,res:Response): Promise<Response | any>{
    const {code,language} = req.body;
    if ((typeof code !== "string") || (typeof language !== "number") ) {
        return res.status(400).json({ error: "Missing or invalid 'code' in request body." });
    }
    const reqData = {
        source_code : code,
        language_id : language
    };
    try{
        const response = await axios.post(`${JUDGE_URL}/submissions?base64_encoded=true&wait=false&fields=*`,reqData,{
            headers:config
        });
        const {token} = await response.data;
        if(token){
            let submissionStatus = false;
            let output = null;
            const maxAttempts = 5;
            let attempt = 0;
            while(!submissionStatus && attempt <= maxAttempts){
                attempt++;
                await new  Promise((res)=> setTimeout(res,5000));
                const responseSub = await axios.get(`${JUDGE_URL}/submissions/${token}?base64_encoded=true&fields=*`,{
                    headers:config
                });
                const subOutput = await responseSub.data;
                if(subOutput.stderr){
                    const err = atob(subOutput.stderr);
                    submissionStatus = true;
                    return res.status(400).json({msg:err});
                }
                if(subOutput.status &&  subOutput.status.id == 6){
                    submissionStatus=true;
                    output = subOutput;
                    return res.status(200).json({msg:output});
                }
                if(subOutput.status &&  subOutput.status.id == 3 && subOutput.status.description == "Accepted"){
                    submissionStatus=true;
                    output = subOutput;
                    return res.status(200).json({msg:output});
                }
            }
            if(!submissionStatus){
                return res.status(408).json({msg:"request timeout or submission is not accepted"});
            }
            return res.status(200).json({msg:output});
        }else{
            res.status(500).json({"msg":"something went wrong, token for checking not found"})
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({ msg: "An error occurred while processing your request." });
    }
}