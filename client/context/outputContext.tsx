import React, { createContext, useState } from "react"

type outputContextType = {
    output ?: string,
    error : string|null,
    setOutput : React.Dispatch<React.SetStateAction<string | undefined>>
    setError : React.Dispatch<React.SetStateAction<string | null>>
}
export const outputContext = createContext<outputContextType | null>(null);

export const OutputProvider = ({children}: {children : React.ReactNode})=>{
    const [output, setOutput] = useState<string| undefined>("");
    const [error, setError] = useState<string | null>(null);
    return (
        <outputContext.Provider value={{output,setOutput,error,setError}}>
            {children}
        </outputContext.Provider>
    )
}