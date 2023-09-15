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
exports.SylebusController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const sylebus_service_1 = require("./sylebus.service");
const createSylebus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const sylebusData = req.body;
    const { filename, path } = req === null || req === void 0 ? void 0 : req.file;
    const data = Object.assign(Object.assign({}, sylebusData), { file: path });
    const Sylebus = yield sylebus_service_1.SylebusService.createSylebus(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Sylebus created successfully!",
        data: Sylebus,
    });
}));
const getAllSylebus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Sylebus = yield sylebus_service_1.SylebusService.getAllSylebus();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Sylebus fetched successfully!",
        data: Sylebus,
    });
}));
const getSylebusById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const Sylebus = yield sylebus_service_1.SylebusService.getSylebusById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Sylebus fetched successfully!",
        data: Sylebus,
    });
}));
const getSylebussByClass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const Sylebus = yield sylebus_service_1.SylebusService.getSylebussByClass((_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.class);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Sylebus fetched successfully!",
        data: Sylebus,
    });
}));
const updateSylebus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const updatedData = req.body;
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const SylebusData = req.body;
    const { filename, path } = req === null || req === void 0 ? void 0 : req.file;
    const data = Object.assign(Object.assign({}, SylebusData), { file: path });
    const Sylebus = yield sylebus_service_1.SylebusService.updateSylebusById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Sylebus updated successfully!",
        data: Sylebus,
    });
}));
const deleteSylebus = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Sylebus = yield sylebus_service_1.SylebusService.deleteSylebusById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Sylebus deleted successfully!",
        data: Sylebus,
    });
}));
exports.SylebusController = {
    getAllSylebus,
    getSylebusById,
    updateSylebus,
    deleteSylebus,
    createSylebus,
    getSylebussByClass,
};
