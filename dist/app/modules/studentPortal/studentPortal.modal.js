"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentPortal = void 0;
const mongoose_1 = require("mongoose");
const StudentPortalSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    shift: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.StudentPortal = (0, mongoose_1.model)("StudentPortal", StudentPortalSchema);
