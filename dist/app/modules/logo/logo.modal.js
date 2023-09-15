"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logo = void 0;
const mongoose_1 = require("mongoose");
const LogoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Logo = (0, mongoose_1.model)("Logo", LogoSchema);
