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
exports.NoticeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const notice_service_1 = require("./notice.service");
const uploadFileToDrive_1 = __importDefault(require("../../middlewares/uploadFileToDrive"));
const createNotice = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const noticeData = req.body;
    const { filename } = req === null || req === void 0 ? void 0 : req.file;
    const pdfFile = req.file;
    const pdfFileUrl = yield (0, uploadFileToDrive_1.default)(pdfFile, filename);
    const data = Object.assign(Object.assign({}, noticeData), { file: pdfFileUrl });
    const result = yield notice_service_1.NoticeService.createNotice(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Notice created successfully!",
        data: result,
    });
}));
const getAllNotice = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_service_1.NoticeService.getAllNotice();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Notice fetched successfully!",
        data: result,
    });
}));
const getNoticeById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield notice_service_1.NoticeService.getNoticeById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Notice fetched successfully!",
        data: result,
    });
}));
const updateNotice = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const updatedData = req.body;
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const noticeData = req.body;
    const { filename } = req === null || req === void 0 ? void 0 : req.file;
    const pdfFile = req.file;
    const pdfFileUrl = yield (0, uploadFileToDrive_1.default)(pdfFile, filename);
    const data = Object.assign(Object.assign({}, noticeData), { file: pdfFileUrl });
    const result = yield notice_service_1.NoticeService.updateNoticeById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Notice updated successfully!",
        data: result,
    });
}));
const deleteNotice = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield notice_service_1.NoticeService.deleteNoticeById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Notice deleted successfully!",
        data: result,
    });
}));
exports.NoticeController = {
    getAllNotice,
    getNoticeById,
    updateNotice,
    deleteNotice,
    createNotice,
};
