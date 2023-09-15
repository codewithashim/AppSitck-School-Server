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
exports.PhotoGelaryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const photoGelary_service_1 = require("./photoGelary.service");
const createPhotoGelary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const photoGelaryData = req.body;
    const result = yield photoGelary_service_1.PhotoGelaryService.createPhotoGelary(photoGelaryData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "PhotoGelary created successfully!",
        data: result,
    });
}));
const getAllPhotoGelary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield photoGelary_service_1.PhotoGelaryService.getAllPhotoGelary();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "PhotoGelary fetched successfully!",
        data: result,
    });
}));
const getPhotoGelaryById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield photoGelary_service_1.PhotoGelaryService.getPhotoGelaryById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "PhotoGelary fetched successfully!",
        data: result,
    });
}));
const updatePhotoGelary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield photoGelary_service_1.PhotoGelaryService.updatePhotoGelaryById(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "PhotoGelary updated successfully!",
        data: result,
    });
}));
const deletePhotoGelary = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield photoGelary_service_1.PhotoGelaryService.deletePhotoGelaryById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "PhotoGelary deleted successfully!",
        data: result,
    });
}));
const getPhotoGelaryByAlbum = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { album } = req === null || req === void 0 ? void 0 : req.params;
    const albumObject = {
        album,
        title: "",
        image: "",
    };
    const result = yield photoGelary_service_1.PhotoGelaryService.getPhotoGelaryByAlbum(albumObject);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "PhotoGelary fetched successfully!",
        data: result,
    });
}));
const createAlbum = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const albumData = req.body;
    const result = yield photoGelary_service_1.PhotoGelaryService.createAlbum(albumData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Album created successfully!",
        data: result,
    });
}));
const getAllAlbum = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield photoGelary_service_1.PhotoGelaryService.getAllAlbum();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Album fetched successfully!",
        data: result,
    });
}));
const deleteAlbum = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield photoGelary_service_1.PhotoGelaryService.deleteAlbumById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Album deleted successfully!",
        data: result,
    });
}));
exports.PhotoGelaryController = {
    getAllPhotoGelary,
    getPhotoGelaryById,
    updatePhotoGelary,
    deletePhotoGelary,
    createPhotoGelary,
    getPhotoGelaryByAlbum,
    createAlbum,
    getAllAlbum,
    deleteAlbum,
};
