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
exports.FooterService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const footer_model_1 = require("./footer.model");
const createFooter = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const footer = new footer_model_1.Footer(Object.assign({}, payload));
        yield footer.save();
        return footer;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllFooter = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const footers = yield footer_model_1.Footer.find();
        if (!footers) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Footer not found");
        }
        return footers;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getFooterById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const footer = yield footer_model_1.Footer.findById(id);
        if (!footer) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Footer not found");
        }
        return footer;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateFooterById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield footer_model_1.Footer.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteFooterById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const footer = yield footer_model_1.Footer.findByIdAndDelete(id);
        return footer;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const createLink = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const link = new footer_model_1.Link(Object.assign({}, payload));
        yield link.save();
        return link;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllLink = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const links = yield footer_model_1.Link.find();
        if (!links) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Link not found");
        }
        return links;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getLinkById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const link = yield footer_model_1.Link.findById(id);
        if (!link) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Link not found");
        }
        return link;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateLinkById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield footer_model_1.Link.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteLinkById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const link = yield footer_model_1.Link.findByIdAndDelete(id);
        return link;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.FooterService = {
    createFooter,
    getAllFooter,
    getFooterById,
    updateFooterById,
    deleteFooterById,
    createLink,
    getAllLink,
    getLinkById,
    updateLinkById,
    deleteLinkById,
};
