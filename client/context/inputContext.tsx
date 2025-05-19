import React, { createContext, useState } from "react"

type inputContextType = {
    input ?: string,
    setInput : React.Dispatch<React.SetStateAction<string | undefined>>
}
export const inputContext = createContext<inputContextType | null>(null);

export const InputProvider = ({children}: {children : React.ReactNode})=>{
    const [input, setInput] = useState<string| undefined>("");
    return (
        <inputContext.Provider value={{input,setInput}}>
            {children}
        </inputContext.Provider>
    )
}