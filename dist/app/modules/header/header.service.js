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
exports.HeaderService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const header_model_1 = require("./header.model");
const createHeader = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = new header_model_1.Header(Object.assign({}, payload));
        yield header.save();
        return header;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllHeader = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headers = yield header_model_1.Header.find();
        if (!headers) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Header not found");
        }
        return headers;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getHeaderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = yield header_model_1.Header.findById(id);
        if (!header) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Header not found");
        }
        return header;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateHeaderById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield header_model_1.Header.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteHeaderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const header = yield header_model_1.Header.findByIdAndDelete(id);
        return header;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.HeaderService = {
    createHeader,
    getAllHeader,
    getHeaderById,
    updateHeaderById,
    deleteHeaderById,
};
