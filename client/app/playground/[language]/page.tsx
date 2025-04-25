"use client"
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";

const Home = ()=>{
    const params = useParams();
    const paramLangauge = params.language;
    console.log(paramLangauge);
    let compiler;
    let language;
    let version
    if(typeof paramLangauge == "string"){
        compiler = decodeURIComponent(paramLangauge);
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
        </>
    )
}
export default Home;