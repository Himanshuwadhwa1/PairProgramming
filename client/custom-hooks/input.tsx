import { inputContext } from "@/context/inputContext";
import { useContext } from "react";

export const useInput = ()=>{
    const context = useContext(inputContext);
    if(!context){
        throw new Error("useInput must be used withtin inputProvider");
    }
    return context;
}