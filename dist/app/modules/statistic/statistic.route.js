"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticRoutes = void 0;
const express_1 = __importDefault(require("express"));
const statistic_controller_1 = require("./statistic.controller");
const router = express_1.default.Router();
router.get("/", statistic_controller_1.StatisticController.getAllStatistic);
router.get("/:id", statistic_controller_1.StatisticController.getStatisticById);
router.post("/create", statistic_controller_1.StatisticController.createStatistic);
router.patch("/:id", statistic_controller_1.StatisticController.updateStatistic);
router.delete("/:id", statistic_controller_1.StatisticController.deleteStatistic);
exports.StatisticRoutes = router;
