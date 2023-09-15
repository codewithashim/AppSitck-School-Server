"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rutine = void 0;
const mongoose_1 = require("mongoose");
const RutineSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    details: {
        type: String,
    },
    class: {
        type: String,
    },
    pbulishDate: {
        type: String,
    },
    file: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Rutine = (0, mongoose_1.model)("Rutine", RutineSchema);
