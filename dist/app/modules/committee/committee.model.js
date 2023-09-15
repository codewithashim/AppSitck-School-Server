"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Committee = void 0;
const mongoose_1 = require("mongoose");
const CommitteeSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    detail: {
        type: String,
    },
    position: {
        type: String,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Committee = (0, mongoose_1.model)("Committee", CommitteeSchema);
