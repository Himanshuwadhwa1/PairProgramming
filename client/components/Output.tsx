import { fontBitter, spaceMonoHeavy } from "@/app/layout";
import { useState } from "react";

export default function Output(){
    const [output,setOutput] = useState<string | undefined>("");
    const [input,setInput] = useState<string | undefined>("");
    const [error,setError] = useState<string | undefined>("");
    return(
        <section className={`${spaceMonoHeavy.className} flex flex-col w-full h-120`}>
            <label htmlFor="input" className="h-fit">
                <h4 className="flex flex-col gap-2 h-fit text-2xl p-4">
                    Enter Inputs comma seperated :
                    <p className={`${fontBitter.className} font-light`}>(If any with comma)</p>
                </h4>
            </label>
            
            <textarea name="input" id="input" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="1,2,3..." rows={2} cols={30} className="areaText"/>
            <div className="output">
                {output}
            </div>
        </section>
    )
}