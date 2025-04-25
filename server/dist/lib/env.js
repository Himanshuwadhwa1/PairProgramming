"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JUDGE_API_HOST = exports.JUDGE_API_KEY = exports.JUDGE_URL = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
function convertToString(input) {
    if (typeof input == undefined) {
        throw Error("something wrong with .env");
    }
    return input;
}
exports.JUDGE_URL = convertToString(process.env.URL_JUDGE);
exports.JUDGE_API_KEY = convertToString(process.env.API_KEY);
exports.JUDGE_API_HOST = convertToString(process.env.API_HOST);
