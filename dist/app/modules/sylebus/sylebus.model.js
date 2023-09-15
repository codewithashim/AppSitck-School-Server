"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sylebus = void 0;
const mongoose_1 = require("mongoose");
const SylebusSchema = new mongoose_1.Schema({
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
exports.Sylebus = (0, mongoose_1.model)("Sylebus", SylebusSchema);
