"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statistic = exports.OrganizationStatistic = void 0;
const mongoose_1 = require("mongoose");
const OrganizationStatisticSchema = new mongoose_1.Schema({
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
const StatisticSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    counte: {
        type: String,
    },
    status: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.OrganizationStatistic = (0, mongoose_1.model)("OrganizationStatistic", OrganizationStatisticSchema);
exports.Statistic = (0, mongoose_1.model)("Statistic", StatisticSchema);
