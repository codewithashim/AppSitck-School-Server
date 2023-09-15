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
exports.ResultService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const result_model_1 = require("./result.model");
const createResult = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield result_model_1.Result.create(payload);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllResult = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield result_model_1.Result.find();
        return results;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getResultById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield result_model_1.Result.findOne({ _id: id });
        if (!result) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Result not found");
        }
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getResultsByClass = (classes) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield result_model_1.Result.find({ class: classes });
        return results;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateResultById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield result_model_1.Result.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteResultById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield result_model_1.Result.findByIdAndDelete(id);
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.ResultService = {
    createResult,
    getAllResult,
    getResultById,
    updateResultById,
    deleteResultById,
    getResultsByClass,
};
