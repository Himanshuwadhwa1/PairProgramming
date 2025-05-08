import express from "express";
import {configDotenv} from "dotenv"
import { submission } from "./router/submission";
import cors from "cors";
configDotenv();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',submission);
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})