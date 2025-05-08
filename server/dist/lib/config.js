"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const env_1 = require("./env");
exports.config = {
    'x-rapidapi-key': env_1.JUDGE_API_KEY,
    'X-Auth-User': env_1.JUDGE_API_HOST
};
