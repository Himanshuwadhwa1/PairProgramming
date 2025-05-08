"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submission = void 0;
const express_1 = require("express");
const submission_1 = require("../controller/submission");
const submission = (0, express_1.Router)();
exports.submission = submission;
submission.post('/submission', submission_1.submOutput);
