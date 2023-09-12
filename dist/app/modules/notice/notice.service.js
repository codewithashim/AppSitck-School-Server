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
exports.NoticeService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const notice_model_1 = require("./notice.model");
const createNotice = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notice = yield notice_model_1.Notice.create(payload);
        return notice;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllNotice = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notices = yield notice_model_1.Notice.find();
        return notices;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getNoticeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notice = yield notice_model_1.Notice.findById(id);
        if (!notice) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Notice not found");
        }
        return notice;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateNoticeById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield notice_model_1.Notice.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteNoticeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notice = yield notice_model_1.Notice.findByIdAndDelete(id);
        return notice;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.NoticeService = {
    createNotice,
    getAllNotice,
    getNoticeById,
    updateNoticeById,
    deleteNoticeById,
};
