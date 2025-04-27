"use client"
import { spaceMonoHeavy } from "@/app/layout";
import { languages } from "@/lib/languages";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Container = ()=>{
    const [selected,setSelected] = useState<string>("C++ (GCC 14.1.0)");
    return (
        <section className="w-full bg-[#dfb79f] h-100">
            <div className={`w-full/2 flex flex-col justify-center items-center p-7 gap-4 ${spaceMonoHeavy.className} heading`}>
            <p className="font-bold">An intuitive online code editor designed for real-time collaboration,</p>
            <p> Write, Edit, and Run code together from anywhere. </p>
            </div>

            <div className="flex h-70 justify-center items-center">
                <div className="flex gap-6 items-center">
                    <p className="text-3xl text-[#493e3f] font-mono font-semibold" >Start Coding in Your favourite language :
                    </p>

                    <select name="langauges" id="languages" value={selected} onChange={(e)=>setSelected(e.target.value)} className="border-2 border-[#97866A] text-xl rounded-sm hover:border-4">
                        {languages.map((language, index)=>{
                            return <option key={index} value={language.name} 
                            className="text-md">
                                {language.name}
                            </option>
                        })}
                    </select>
                    <Link href={`/playground/${selected}`}> <ArrowRightCircle size={30} /> 
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Container;