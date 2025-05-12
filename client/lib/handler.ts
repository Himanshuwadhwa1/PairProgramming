import Axios  from "axios";
import { serverURL } from "./env";
type bodyType = {
    code:string,
    language : number
}
// overfetching
const config = {
    headers: {
        'Content-Type': 'application/json',
      },
}
export async function runHandler(body:bodyType,run:boolean){
    const response = await Axios.post(`${serverURL}/api/submission`,JSON.stringify(body), config);
    const data = await response.data;
    console.log(data);
}