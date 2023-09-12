"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSlider = void 0;
const mongoose_1 = require("mongoose");
const HomeSliderSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    details: {
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
exports.HomeSlider = (0, mongoose_1.model)("HomeSlider", HomeSliderSchema);
