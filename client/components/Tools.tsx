"use client"
import { Play, Radio, Save, Video } from "lucide-react";
import { Button } from "./ui/button";
import { languages } from "@/lib/languages";
import { useEffect, useState } from "react";
import { runHandler } from "@/lib/handler";
import { useOutput } from "@/custom-hooks/output";
type toolProps = {
    code:string,
    language:string,

}

export default function Tools({code,language} :toolProps){
    const [languageId,setLanguageId] = useState<number>();
    const [run,setRun] = useState<boolean>(false);
    const {setOutput,setError} = useOutput();
    useEffect(()=>{
        let languageFound = false;
        for(let i =0; i<languages.length;i++){
            if(languages[i]["name"] == language ){
                setLanguageId(languages[i]["id"]);
                languageFound = true;
                console.log("found");
                setRun(true);
                return;
            }
        }
        if(!languageFound){
            console.log("Language Id not found");
            setRun(false);
            alert("Invalid Language");
        }
    },[language]);
    const body = {"code":btoa(code),"language":languageId as number};
    return(
        <section className="flex w-130 h-fit  justify-center">
            <Button variant={"outline"} size={"lg"} onClick={()=>runHandler({body,run,setOutput,setError})}>Run<Play/></Button>
            <Button variant={"outline"} size={"lg"}>Save<Save/></Button>
            <Button variant={"destructive"} size={"lg"} className="cursor-pointer">Live Share<Radio/></Button>
            <Button variant={"destructive"} size={"lg"} className="cursor-pointer">Video Call<Video/></Button>
        </section>
    )
}