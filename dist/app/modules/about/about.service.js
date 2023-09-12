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
exports.AboutService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const about_model_1 = require("./about.model");
const createAbout = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const about = yield about_model_1.About.create(payload);
        return about;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllAbout = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const abouts = yield about_model_1.About.find();
        return abouts;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getAboutById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const about = yield about_model_1.About.findById(id);
        return about;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateAboutById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield about_model_1.About.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteAboutById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const about = yield about_model_1.About.findByIdAndDelete(id);
        return about;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.AboutService = {
    createAbout,
    getAllAbout,
    getAboutById,
    updateAboutById,
    deleteAboutById,
};
