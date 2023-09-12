"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const mongoose_1 = require("mongoose");
const TeacherSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: String,
        required: true,
    },
    position: {
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
exports.Teacher = (0, mongoose_1.model)("Teacher", TeacherSchema);
