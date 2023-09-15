"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const mongoose_1 = require("mongoose");
const StaffSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    detail: {
        type: String,
    },
    joiningDate: {
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
exports.Staff = (0, mongoose_1.model)("Staff", StaffSchema);
