"use client"
import { themeMap } from "@/lib/theme";
import { Editor, useMonaco } from "@monaco-editor/react";
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import Tools from "./Tools";
interface editorProp {
  language : string,
  theme : string,
  paramLang ?: string,
}

const CodeEditor = ({ language,theme,paramLang }: editorProp) => {
    const [code, setCode] = useState<string>("# write code");
    const monaco = useMonaco();
    const handleChange = (value: string | undefined) => {
        setCode(value || "");
    };
    const spinner = (<ClockLoader
    size={100} 
    color="#D29F80"
    speedMultiplier={4}
    cssOverride={{backgroundColor:"#604652"}}
    />)
    
    useEffect(() => {

      if(!monaco || !theme) return;
      if (monaco) {
        async function  loadTheme() {
          if(['vs', 'vs-dark','hc-black'].includes(theme)){
            monaco?.editor.setTheme(theme);
            return;
          }
          const themeLoader = themeMap[theme];
          if(themeLoader){
            try {
              const themeData = await themeLoader();
              monaco?.editor.defineTheme(theme,themeData);
              monaco?.editor.setTheme(theme);
              return
            } catch (error) {
              console.error(`failed to load theme ${theme} : `,error);
            }
          }else{
              console.warn(`Theme "${theme}" not found in themeMap.`);
            }
          }
          loadTheme();
      }
    }, [monaco,theme]);
    
    return (
        <section className="flex justify-start w-full px-2">
            <Editor
                defaultValue={`// ${language}`}
                language={language}
                height={550}
                width={1000}
                value={code}
                theme={theme}
                onChange={handleChange}
                loading={spinner}
                options={{
                    fontSize: 16,
                    fontFamily: 'Jetbrains-Mono',
                    fontLigatures: true,
                    wordWrap: 'on',
                    minimap: {
                      enabled: false
                    },
                    bracketPairColorization: {
                      enabled: true
                    },
                    cursorBlinking: 'smooth',
                    formatOnPaste: true,
                    cursorStyle:'line',
                    suggest: {
                      showFields: true,
                      showFunctions: true
                    }
                  }}
            />
            <Tools code={code} language={paramLang as string} />
        </section>
    );
};

export default CodeEditor;
