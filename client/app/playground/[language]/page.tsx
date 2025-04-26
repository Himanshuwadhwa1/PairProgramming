"use client"
import CodeEditor from "@/components/CodeEditor";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";

const Page = ()=>{
    const params = useParams();
    const paramLangauge = params.language;
    let compiler;
    let language;
    let version
    
    if(typeof paramLangauge == "undefined"){
        return (<>
        wrong language
        </>)
    }
    else{
        compiler = decodeURIComponent(paramLangauge as string);
        const words = compiler.split(" (");
        language = words[0];
        if(words.length >1){
            version = words[words.length-1];
            version = version.slice(0,version.length-1);
        }
        console.log(words)
    }
    return (
        <>
        <Navbar />
        <div className="flex gap-2">
        Your online <b>{language} </b> Compiler
        {version && <p>  with version <b>{version}</b></p>}
        </div>
        <div className="flex justify-center items-center">
        <CodeEditor language ={language?.toLowerCase() as string}/>
        </div>
        </>
    )
}
export default Page;