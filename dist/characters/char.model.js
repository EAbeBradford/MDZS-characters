"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharSchema = void 0;
const mongoose = require("mongoose");
exports.CharSchema = new mongoose.Schema({
    birthName: { type: String, required: true },
    courtesyName: { type: String, required: false },
    title: { type: String, required: false },
    sect: { type: String, required: false },
    weapon: { type: [String], required: false },
    picture: { type: String, required: true },
});
//# sourceMappingURL=char.model.js.map