"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.Link = void 0;
const mongoose_1 = require("mongoose");
const FooterSchema = new mongoose_1.Schema({
    schoolName: {
        type: String,
    },
    schoolAddress: {
        type: String,
    },
    schoolDetail: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    youtube: {
        type: String,
    },
    instagram: {
        type: String,
    },
    linkedin: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const LinkSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    url: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Link = (0, mongoose_1.model)("Link", LinkSchema);
exports.Footer = (0, mongoose_1.model)("Footer", FooterSchema);
