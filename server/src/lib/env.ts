import { configDotenv } from "dotenv";
configDotenv();
function convertToString(input:string|undefined):string{
    if(typeof input == undefined){
        throw Error("something wrong with .env");
    }
    return input as string;
}

export const JUDGE_URL:string = convertToString(process.env.URL_JUDGE);
export const JUDGE_API_KEY:string = convertToString(process.env.API_KEY);
export const JUDGE_API_HOST:string = convertToString(process.env.API_HOST);