"use client"
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { ClockLoader } from "react-spinners";

const CodeEditor = ({ language }: { language: string }) => {
    const [code, setCode] = useState<string>("# write code");

    const handleChange = (value: string | undefined) => {
        setCode(value || "");
        console.log(value);
    };
    const spinner = (<ClockLoader
    size={100} 
    color="#D29F80"
    speedMultiplier={4}
    cssOverride={{backgroundColor:"#604652"}}
    />)
    console.log(language);

    return (
        <section className="flex justify-start w-full px-2">
            <Editor
                defaultValue={`// ${language}`}
                language={language}
                height={550}
                width={1000}
                value={code}
                theme="hc-black"
                onChange={handleChange}
                loading={spinner}
            />
        </section>
    );
};

export default CodeEditor;
