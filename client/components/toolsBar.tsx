"use client"
import { fontBitter } from "@/app/layout";
import { themes } from "@/lib/theme";
import { useState } from "react"

const ToolBar = ()=>{
    const [theme,setTheme] = useState<string|undefined>("");
    
    return (
        <section className={`flex gap-0.5 items-center ${fontBitter.className}`}>
            <h3 className="text-xl font-semibold">Themes:</h3>
            <select name="themes" id="theme" value={theme} onChange={(e)=>setTheme(e.target.value)}
             className="border-2 border-[#97866A] text-xl rounded-sm bg-[#604652] text-amber-100 w-75">
                {themes.map((theme)=>{
                    return <option key={theme.id} value={theme.name} className="text-md text-center">
                        {theme.name}
                         </option>
                })}
            </select>
            
        </section>
    )
}
export default ToolBar;