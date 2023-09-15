"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const teacher_model_1 = require("./teacher.model");
const createTeacher = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield teacher_model_1.Teacher.create(payload);
        return teacher;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllTeacher = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield teacher_model_1.Teacher.find();
        if (!teachers) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Teacher not found");
        }
        return teachers;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getTeacherById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield teacher_model_1.Teacher.findById(id);
        if (!teacher) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Teacher not found");
        }
        return teacher;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateTeacherById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield teacher_model_1.Teacher.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return teacher;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteTeacherById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = yield teacher_model_1.Teacher.findByIdAndDelete(id);
        return teacher;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const createMessage = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield teacher_model_1.Message.create(payload);
        return message;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllMessage = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield teacher_model_1.Message.find();
        if (!messages) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Message not found");
        }
        return messages;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getMessageById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield teacher_model_1.Message.findById(id);
        if (!message) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Message not found");
        }
        return message;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateMessageById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield teacher_model_1.Message.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return message;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteMessageById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = yield teacher_model_1.Message.findByIdAndDelete(id);
        return message;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.TeacherService = {
    createTeacher,
    getAllTeacher,
    getTeacherById,
    updateTeacherById,
    deleteTeacherById,
    createMessage,
    getAllMessage,
    getMessageById,
    updateMessageById,
    deleteMessageById,
};
