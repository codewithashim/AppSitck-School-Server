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
exports.StudentPortalService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const studentPortal_modal_1 = require("./studentPortal.modal");
const createStudentPortal = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentPortal = yield studentPortal_modal_1.StudentPortal.create(payload);
        return studentPortal;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllStudentPortal = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentPortals = yield studentPortal_modal_1.StudentPortal.find();
        return StudentPortals;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getStudentPortalById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentPortal = yield studentPortal_modal_1.StudentPortal.findOne({ _id: id });
        if (!studentPortal) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "StudentPortal not found");
        }
        return studentPortal;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateStudentPortalById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentPortal = yield studentPortal_modal_1.StudentPortal.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return studentPortal;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteStudentPortalById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentPortal = yield studentPortal_modal_1.StudentPortal.findByIdAndDelete(id);
        return studentPortal;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.StudentPortalService = {
    createStudentPortal,
    getAllStudentPortal,
    getStudentPortalById,
    updateStudentPortalById,
    deleteStudentPortalById,
};
