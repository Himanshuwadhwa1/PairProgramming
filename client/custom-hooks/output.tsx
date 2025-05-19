import { outputContext } from "@/context/outputContext";
import { useContext } from "react";

export const useOutput = ()=>{
    const context = useContext(outputContext);
    if(!context){
        throw new Error("useOutput must be used withtin outputProvider");
    }
    return context;
}