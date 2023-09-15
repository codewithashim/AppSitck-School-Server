"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const mongoose_1 = require("mongoose");
const HeaderSchema = new mongoose_1.Schema({
    logo: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
    },
    estdSince: {
        type: String,
    },
    schoolAddress: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Header = (0, mongoose_1.model)("Header", HeaderSchema);
