"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submOutput = submOutput;
const axios_1 = __importDefault(require("axios"));
const env_1 = require("../lib/env");
const config_1 = require("../lib/config");
function submOutput(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code, language } = req.body;
        if ((typeof code !== "string") || (typeof language !== "number")) {
            return res.status(400).json({ error: "Missing or invalid 'code' in request body." });
        }
        const reqData = {
            source_code: code,
            language_id: language
        };
        try {
            const response = yield axios_1.default.post(`${env_1.JUDGE_URL}/submissions?base64_encoded=true&wait=false&fields=*`, reqData, {
                headers: config_1.config
            });
            const { token } = yield response.data;
            if (token) {
                let submissionStatus = false;
                let output = null;
                const maxAttempts = 5;
                let attempt = 0;
                while (!submissionStatus && attempt <= maxAttempts) {
                    attempt++;
                    yield new Promise((res) => setTimeout(res, 5000));
                    const responseSub = yield axios_1.default.get(`${env_1.JUDGE_URL}/submissions/${token}?base64_encoded=true&fields=*`, {
                        headers: config_1.config
                    });
                    const subOutput = responseSub.data;
                    if (subOutput.stderr) {
                        const err = atob(subOutput.stderr);
                        return res.status(400).json({ msg: err });
                    }
                    if (subOutput.status && subOutput.status.id == 3 && subOutput.status.description == "Accepted") {
                        submissionStatus = true;
                        output = subOutput;
                    }
                }
                if (!submissionStatus) {
                    return res.status(408).json({ msg: "request timeout or submission is not accepted" });
                }
                return res.status(200).json({ msg: output });
            }
            else {
                res.status(500).json({ "msg": "something went wrong, token for checking not found" });
            }
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ msg: "An error occurred while processing your request." });
        }
    });
}
