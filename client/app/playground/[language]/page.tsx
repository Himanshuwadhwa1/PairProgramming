"use client"
import { fontBitter, spaceMonoHeavy } from "@/app/layout";
import CodeEditor from "@/components/CodeEditor";
import Navbar from "@/components/Navbar";
import ToolBar from "@/components/toolsBar";
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
    }
    return (
        <section className="w-full h-full bg-[#dfb79f]">
            <Navbar />
            <div className={`flex ${fontBitter.className} w-full justify-around`}>
                <h2 className={`flex text-[40px]  text-[#4c3440] font-semibold`}>
                    <>Your online {language} Compiler {version && <>with version {version}</>}
                    </>
                </h2>
                <ToolBar />
            </div>
            <div className="flex justify-center items-center">
                <CodeEditor language ={language?.toLowerCase() as string}/>
            </div>
        </section>
    )
}
export default Page;