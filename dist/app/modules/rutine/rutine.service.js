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
exports.RutineService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const rutine_model_1 = require("./rutine.model");
const createRutine = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutine = yield rutine_model_1.Rutine.create(payload);
        return rutine;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllRutine = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Rutines = yield rutine_model_1.Rutine.find();
        return Rutines;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getRutineById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutine = yield rutine_model_1.Rutine.findOne({ _id: id });
        if (!rutine) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Rutine not found");
        }
        return rutine;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getRutinesByClass = (classes) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutines = yield rutine_model_1.Rutine.find({ class: classes });
        if (!rutines) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Rutine not found");
        }
        return rutines;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateRutineById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutine = yield rutine_model_1.Rutine.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return rutine;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteRutineById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rutine = yield rutine_model_1.Rutine.findByIdAndDelete(id);
        return rutine;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.RutineService = {
    createRutine,
    getAllRutine,
    getRutineById,
    updateRutineById,
    deleteRutineById,
    getRutinesByClass
};
