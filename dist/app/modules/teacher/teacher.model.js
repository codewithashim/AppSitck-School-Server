"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Message = void 0;
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const TeacherSchema = new mongoose_1.Schema({
    name: {
        type: String,
    },
    detail: {
        type: String,
    },
    joiningDate: {
        type: String,
    },
    indexNo: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    qualification: {
        type: String,
    },
    position: {
        type: String,
    },
    image: {
        type: String,
    },
    presentAddress: {
        type: String,
    },
    permanentAddress: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Message = (0, mongoose_1.model)("Message", MessageSchema);
exports.Teacher = (0, mongoose_1.model)("Teacher", TeacherSchema);
