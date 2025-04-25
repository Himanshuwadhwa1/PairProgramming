"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsOutput = jsOutput;
function jsOutput(req, res) {
    const { code } = req.body;
    if (typeof code !== "string") {
        return res.status(400).json({ error: "Missing or invalid 'code' in request body." });
    }
    return res.status(200).json({ response: code });
}
