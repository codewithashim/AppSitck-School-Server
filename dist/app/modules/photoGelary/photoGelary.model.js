"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoGelary = exports.Album = void 0;
const mongoose_1 = require("mongoose");
const PhotoGelarySchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    album: {
        type: String,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const AlbumSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Album = (0, mongoose_1.model)("Album", AlbumSchema);
exports.PhotoGelary = (0, mongoose_1.model)("PhotoGelary", PhotoGelarySchema);
