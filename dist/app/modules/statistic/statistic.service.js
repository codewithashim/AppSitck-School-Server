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
exports.StatisticService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const statistic_modal_1 = require("./statistic.modal");
const createStatistic = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.Statistic.create(payload);
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllStatistic = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistics = yield statistic_modal_1.Statistic.find();
        return statistics;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getStatisticById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.Statistic.findById(id);
        if (!statistic) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Statistic not found");
        }
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateStatisticById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.Statistic.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteStatisticById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.Statistic.findByIdAndDelete(id);
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const createOrganizationStatistic = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.OrganizationStatistic.create(payload);
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllOrganizationStatistic = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistics = yield statistic_modal_1.OrganizationStatistic.find();
        return statistics;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getOrganizationStatisticById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.OrganizationStatistic.findById(id);
        if (!statistic) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Statistic not found");
        }
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateOrganizationStatisticById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.OrganizationStatistic.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteOrganizationStatisticById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const statistic = yield statistic_modal_1.OrganizationStatistic.findByIdAndDelete(id);
        return statistic;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.StatisticService = {
    createStatistic,
    getAllStatistic,
    getStatisticById,
    updateStatisticById,
    deleteStatisticById,
    createOrganizationStatistic,
    getAllOrganizationStatistic,
    getOrganizationStatisticById,
    updateOrganizationStatisticById,
    deleteOrganizationStatisticById,
};
