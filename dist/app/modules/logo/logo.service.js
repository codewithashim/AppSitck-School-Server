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
exports.LogoService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const logo_modal_1 = require("./logo.modal");
const createLogo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logo = yield logo_modal_1.Logo.create(payload);
        return logo;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllLogo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logos = yield logo_modal_1.Logo.find();
        return logos;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getLogoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logo = yield logo_modal_1.Logo.findById(id);
        return logo;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateLogoById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield logo_modal_1.Logo.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteLogoById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logo = yield logo_modal_1.Logo.findByIdAndDelete(id);
        return logo;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.LogoService = {
    createLogo,
    getAllLogo,
    getLogoById,
    updateLogoById,
    deleteLogoById,
};
