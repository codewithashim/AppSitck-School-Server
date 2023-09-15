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
exports.StudentPortalController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const studentPortal_service_1 = require("./studentPortal.service");
const createStudentPortal = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const StudentPortalData = req.body;
    const { filename, path } = req === null || req === void 0 ? void 0 : req.file;
    const data = Object.assign(Object.assign({}, StudentPortalData), { file: path });
    const StudentPortal = yield studentPortal_service_1.StudentPortalService.createStudentPortal(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "StudentPortal created successfully!",
        data: StudentPortal,
    });
}));
const getAllStudentPortal = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const StudentPortal = yield studentPortal_service_1.StudentPortalService.getAllStudentPortal();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "StudentPortal fetched successfully!",
        data: StudentPortal,
    });
}));
const getStudentPortalById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const StudentPortal = yield studentPortal_service_1.StudentPortalService.getStudentPortalById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "StudentPortal fetched successfully!",
        data: StudentPortal,
    });
}));
const updateStudentPortal = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const updatedData = req.body;
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const StudentPortalData = req.body;
    const { filename, path } = req === null || req === void 0 ? void 0 : req.file;
    const data = Object.assign(Object.assign({}, StudentPortalData), { file: path });
    const StudentPortal = yield studentPortal_service_1.StudentPortalService.updateStudentPortalById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "StudentPortal updated successfully!",
        data: StudentPortal,
    });
}));
const deleteStudentPortal = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const StudentPortal = yield studentPortal_service_1.StudentPortalService.deleteStudentPortalById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "StudentPortal deleted successfully!",
        data: StudentPortal,
    });
}));
exports.StudentPortalController = {
    getAllStudentPortal,
    getStudentPortalById,
    updateStudentPortal,
    deleteStudentPortal,
    createStudentPortal,
};
