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
exports.EventService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const event_model_1 = require("./event.model");
const createEvent = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_model_1.Event.create(payload);
        return event;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Bad request");
    }
});
const getAllEvent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield event_model_1.Event.find();
        if (!events) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Event not found");
        }
        return events;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const getEventById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_model_1.Event.findById(id);
        if (!event) {
            throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Event not found");
        }
        return event;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const updateEventById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield event_model_1.Event.findOneAndUpdate({ _id: id }, Object.assign({}, payload), {
            new: true,
        });
        return result;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
const deleteEventById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const event = yield event_model_1.Event.findByIdAndDelete(id);
        return event;
    }
    catch (error) {
        throw new ApiError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "Internal server error");
    }
});
exports.EventService = {
    createEvent,
    getAllEvent,
    getEventById,
    updateEventById,
    deleteEventById,
};
