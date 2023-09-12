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
exports.HomeSliderService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const homeslider_model_1 = require("./homeslider.model");
const createHomeSlider = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homeSlider = new homeslider_model_1.HomeSlider(payload);
        const result = yield homeSlider.save();
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllHomeSlider = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const HomeSliders = yield homeslider_model_1.HomeSlider.find();
        return HomeSliders;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getHomeSliderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homeSlider = yield homeslider_model_1.HomeSlider.findById(id);
        return homeSlider;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateHomeSliderById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield homeslider_model_1.HomeSlider.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteHomeSliderById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const homeSlider = yield homeslider_model_1.HomeSlider.findByIdAndDelete(id);
        return homeSlider;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.HomeSliderService = {
    createHomeSlider,
    getAllHomeSlider,
    getHomeSliderById,
    updateHomeSliderById,
    deleteHomeSliderById,
};
