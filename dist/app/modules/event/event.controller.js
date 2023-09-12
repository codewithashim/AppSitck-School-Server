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
exports.EventController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const event_service_1 = require("./event.service");
const uploadFileToDrive_1 = __importDefault(require("../../middlewares/uploadFileToDrive"));
const createEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const eventData = req.body;
    const { filename } = req === null || req === void 0 ? void 0 : req.file;
    const pdfFile = req.file;
    const pdfFileUrl = yield (0, uploadFileToDrive_1.default)(pdfFile, filename);
    const data = Object.assign(Object.assign({}, eventData), { file: pdfFileUrl });
    const result = yield event_service_1.EventService.createEvent(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Event created successfully!",
        data: result,
    });
}));
const getAllEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_service_1.EventService.getAllEvent();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Event fetched successfully!",
        data: result,
    });
}));
const getEventById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield event_service_1.EventService.getEventById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Event fetched successfully!",
        data: result,
    });
}));
const updateEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    // const updatedData = req.body;
    if (!req.file) {
        res.status(400).json({ error: "No file uploaded" });
        return;
    }
    const eventData = req.body;
    const { filename } = req === null || req === void 0 ? void 0 : req.file;
    const pdfFile = req.file;
    console.log("req.file", req.file);
    const pdfFileUrl = yield (0, uploadFileToDrive_1.default)(pdfFile, filename);
    const data = Object.assign(Object.assign({}, eventData), { file: pdfFileUrl });
    const result = yield event_service_1.EventService.updateEventById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Event updated successfully!",
        data: result,
    });
}));
const deleteEvent = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield event_service_1.EventService.deleteEventById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Event deleted successfully!",
        data: result,
    });
}));
exports.EventController = {
    getAllEvent,
    getEventById,
    updateEvent,
    deleteEvent,
    createEvent,
};
