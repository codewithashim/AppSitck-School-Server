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
exports.CommitteeService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const committee_model_1 = require("./committee.model");
const createCommittee = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const committee = yield committee_model_1.Committee.create(payload);
        return committee;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllCommittee = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Committees = yield committee_model_1.Committee.find();
        return Committees;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getCommitteeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const committee = yield committee_model_1.Committee.findById(id);
        return committee;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateCommitteeById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const committee = yield committee_model_1.Committee.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return committee;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteCommitteeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const committee = yield committee_model_1.Committee.findByIdAndDelete(id);
        return committee;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.CommitteeService = {
    createCommittee,
    getAllCommittee,
    getCommitteeById,
    updateCommitteeById,
    deleteCommitteeById,
};
