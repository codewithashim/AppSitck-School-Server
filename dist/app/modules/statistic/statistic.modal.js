"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistic = void 0;
const mongoose_1 = require("mongoose");
const StatisticSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    counte: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Statistic = (0, mongoose_1.model)("Statistic", StatisticSchema);
