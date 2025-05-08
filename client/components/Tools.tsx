"use client"
import { Play, Radio, Save, Video } from "lucide-react";
import { Button } from "./ui/button";
import { languages } from "@/lib/languages";
import { useEffect, useState } from "react";
import { runHandler } from "@/lib/handler";
type toolProps = {
    code:string,
    language:string
}

export default function Tools({code,language} :toolProps){
    const [languageId,setLanguageId] = useState<number>();
    useEffect(()=>{
        let languageFound = false;
        for(let i =0; i<languages.length;i++){
            if(languages[i]["name"] == language ){
                setLanguageId(languages[i]["id"]);
                languageFound = true;
                console.log("found");
                return;
            }
        }
        if(!languageFound){
            console.log("Language Id not found");
        }
    },[language]);
    const body = {"code":btoa(code),"language":languageId as number};
    return(
        <section className="flex w-130  justify-center">
            <Button variant={"outline"} size={"lg"} onClick={()=>runHandler(body)}>Run<Play/></Button>
            <Button variant={"outline"} size={"lg"}>Save<Save/></Button>
            <Button variant={"destructive"} size={"lg"} className="cursor-pointer">Live Share<Radio/></Button>
            <Button variant={"destructive"} size={"lg"} className="cursor-pointer">Video Call<Video/></Button>
        </section>
    )
}