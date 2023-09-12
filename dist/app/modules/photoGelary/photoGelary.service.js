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
exports.PhotoGelaryService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const photoGelary_model_1 = require("./photoGelary.model");
const createAlbum = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const album = yield photoGelary_model_1.Album.create(payload);
        return album;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllAlbum = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const albums = yield photoGelary_model_1.Album.find();
        return albums;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteAlbumById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const album = yield photoGelary_model_1.Album.findByIdAndDelete(id);
        return album;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const createPhotoGelary = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photoGelary = yield photoGelary_model_1.PhotoGelary.create(payload);
        return photoGelary;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllPhotoGelary = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const PhotoGelarys = yield photoGelary_model_1.PhotoGelary.find();
        return PhotoGelarys;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getPhotoGelaryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photoGelary = yield photoGelary_model_1.PhotoGelary.findById(id);
        return photoGelary;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getPhotoGelaryByAlbum = (album) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photoGelary = yield photoGelary_model_1.PhotoGelary.find({ album });
        return photoGelary;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updatePhotoGelaryById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield photoGelary_model_1.PhotoGelary.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deletePhotoGelaryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photoGelary = yield photoGelary_model_1.PhotoGelary.findByIdAndDelete(id);
        return photoGelary;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.PhotoGelaryService = {
    createPhotoGelary,
    getAllPhotoGelary,
    getPhotoGelaryById,
    updatePhotoGelaryById,
    deletePhotoGelaryById,
    getPhotoGelaryByAlbum,
    createAlbum,
    getAllAlbum,
    deleteAlbumById,
};
