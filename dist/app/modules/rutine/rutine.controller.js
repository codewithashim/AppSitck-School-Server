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
exports.RutineController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const rutine_service_1 = require("./rutine.service");
const createRutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const rutineData = req.body;
    const { filename, path } = req === null || req === void 0 ? void 0 : req.file;
    const data = Object.assign(Object.assign({}, rutineData), { file: path });
    const Rutine = yield rutine_service_1.RutineService.createRutine(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Rutine created successfully!",
        data: Rutine,
    });
}));
const getAllRutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Rutine = yield rutine_service_1.RutineService.getAllRutine();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Rutine fetched successfully!",
        data: Rutine,
    });
}));
const getRutineById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const Rutine = yield rutine_service_1.RutineService.getRutineById((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Rutine fetched successfully!",
        data: Rutine,
    });
}));
const getRutinesByClass = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const Rutine = yield rutine_service_1.RutineService.getRutinesByClass((_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.class);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Rutine fetched successfully!",
        data: Rutine,
    });
}));
const updateRutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const updatedData = req.body;
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const RutineData = req.body;
    const { filename, path } = req === null || req === void 0 ? void 0 : req.file;
    const data = Object.assign(Object.assign({}, RutineData), { file: path });
    const Rutine = yield rutine_service_1.RutineService.updateRutineById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Rutine updated successfully!",
        data: Rutine,
    });
}));
const deleteRutine = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const Rutine = yield rutine_service_1.RutineService.deleteRutineById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Rutine deleted successfully!",
        data: Rutine,
    });
}));
exports.RutineController = {
    getAllRutine,
    getRutineById,
    updateRutine,
    deleteRutine,
    createRutine,
    getRutinesByClass
};
