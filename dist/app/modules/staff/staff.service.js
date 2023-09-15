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
exports.StaffService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const staff_model_1 = require("./staff.model");
const createStaff = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_model_1.Staff.create(payload);
        return staff;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllStaff = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Staffs = yield staff_model_1.Staff.find();
        return Staffs;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getStaffById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_model_1.Staff.findById(id);
        if (!staff) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Staff not found");
        }
        return staff;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateStaffById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_model_1.Staff.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return staff;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteStaffById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staff = yield staff_model_1.Staff.findByIdAndDelete(id);
        return staff;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.StaffService = {
    createStaff,
    getAllStaff,
    getStaffById,
    updateStaffById,
    deleteStaffById,
};
