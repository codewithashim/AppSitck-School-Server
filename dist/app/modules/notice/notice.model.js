"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
const mongoose_1 = require("mongoose");
const NoticeSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    details: {
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
exports.Notice = (0, mongoose_1.model)("Notice", NoticeSchema);
