"use client"
import { fontBitter, spaceMonoHeavy } from "@/app/layout";
import CodeEditor from "@/components/CodeEditor";
import Navbar from "@/components/Navbar";
import { themes } from "@/lib/theme";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = ()=>{
    const [theme,setTheme] = useState<string>("birds-of-paradise");
    const params = useParams();
    const paramLangauge = params.language;
    let compiler;
    let language;
    let version;
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


                <section className={`flex gap-1 items-center ${fontBitter.className}`}>
                    <h3 className="text-xl font-semibold">Editor Themes :</h3>
                    <select name="theme" id="theme" value={theme} onChange={(e)=>setTheme(e.target.value)}
                    className="border-2 border-[#97866A] text-xl rounded-sm bg-[#604652] text-amber-100 w-70">
                        {themes.map((theme)=>{
                            return <option key={theme.id} value={theme.id} className="text-md text-center">
                                {theme.name}
                                </option>
                        })}
                    </select>
                </section>

            </div>
            <div className="flex justify-center items-center">
                <CodeEditor language ={language?.toLowerCase() as string} paramLang={compiler as string} theme={theme}/>
            </div>
        </section>
    )
}
export default Page;