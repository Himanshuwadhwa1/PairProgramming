import Axios  from "axios";
import { serverURL } from "./env";
type bodyType = {
    code:string,
    language : number
}
// overfetching
export async function runHandler(body:bodyType){
    const response = await Axios.post(`${serverURL}/api/submission`,body);
    const data = await response.data;
    console.log(data);
}