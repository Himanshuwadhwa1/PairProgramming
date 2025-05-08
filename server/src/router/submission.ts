import { Router } from "express";
import { submOutput } from "../controller/submission";

const submission = Router();

submission.post('/submission', submOutput as any);

export { submission };