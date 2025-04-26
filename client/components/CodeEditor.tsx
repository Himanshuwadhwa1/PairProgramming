"use client"
import { Editor, useMonaco } from "@monaco-editor/react";

const CodeEditor = ({language} : {language:string})=>{
    const monaco = useMonaco();
    console.log(monaco)
    return (
        <section>
        <Editor
        defaultValue={`// ${language}`}
        language={language}
        height={550}
        width={800}
        theme="hc-black"
        
        loading={"Hold up..."}
        />
        </section>
    )
}
export default CodeEditor;