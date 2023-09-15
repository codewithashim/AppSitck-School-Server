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
exports.SylebusService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const sylebus_model_1 = require("./sylebus.model");
const createSylebus = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sylebus = yield sylebus_model_1.Sylebus.create(payload);
        return sylebus;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllSylebus = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sylebus = yield sylebus_model_1.Sylebus.find();
        return sylebus;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getSylebusById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sylebus = yield sylebus_model_1.Sylebus.findOne({ _id: id });
        if (!sylebus) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Sylebus not found");
        }
        return sylebus;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getSylebussByClass = (classes) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sylebus = yield sylebus_model_1.Sylebus.find({ class: classes });
        if (!sylebus) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Sylebus not found");
        }
        return sylebus;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateSylebusById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sylebus = yield sylebus_model_1.Sylebus.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return sylebus;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteSylebusById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sylebus = yield sylebus_model_1.Sylebus.findByIdAndDelete(id);
        return sylebus;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.SylebusService = {
    createSylebus,
    getAllSylebus,
    getSylebusById,
    updateSylebusById,
    deleteSylebusById,
    getSylebussByClass,
};
