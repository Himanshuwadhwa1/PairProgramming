import express from "express";
import {configDotenv} from "dotenv"
import { submission } from "./router/javascript";
configDotenv();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',submission);
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})