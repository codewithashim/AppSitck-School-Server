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
exports.ContactService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const contact_model_1 = require("./contact.model");
const createContact = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_model_1.Contact.create(payload);
        return contact;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllContact = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield contact_model_1.Contact.find();
        return contacts;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getContactById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_model_1.Contact.findById(id);
        return contact;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateContactById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield contact_model_1.Contact.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteContactById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contact = yield contact_model_1.Contact.findByIdAndDelete(id);
        return contact;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.ContactService = {
    createContact,
    getAllContact,
    getContactById,
    updateContactById,
    deleteContactById,
};
