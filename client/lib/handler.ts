import Axios  from "axios";
import { serverURL } from "./env";
type bodyType = {
    code:string,
    language : number
}

type runHandlerType = {
    body : bodyType,
    run: boolean,
    setOutput : React.Dispatch<React.SetStateAction<string | undefined>>,
    setError : React.Dispatch<React.SetStateAction<string | null>>,
}

// overfetching
const config = {
    headers: {
        'Content-Type': 'application/json',
      },
}
export async function runHandler({body,run,setOutput,setError} : runHandlerType){
    if(run){
        try{
            const response = await Axios.post(`${serverURL}/api/submission`,JSON.stringify(body), config);
            const data = await response.data;
            const msg = data.msg;
            if(msg.status_id == 3){
                const output = atob(msg.stdout);
                setOutput(output);
            }
            console.log(data);
        }catch(err){
            console.log(err);
        }
    }
}