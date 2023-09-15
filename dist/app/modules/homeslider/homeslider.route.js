"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSliderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const homeslider_controller_1 = require("./homeslider.controller");
const router = express_1.default.Router();
router.get("/", homeslider_controller_1.HomeSliderController.getAllHomeSlider);
router.get("/get-singel/:id", homeslider_controller_1.HomeSliderController.getHomeSliderById);
router.post("/create", homeslider_controller_1.HomeSliderController.createHomeSlider);
router.patch("/update/:id", homeslider_controller_1.HomeSliderController.updateHomeSlider);
router.delete("/delete/:id", homeslider_controller_1.HomeSliderController.deleteHomeSlider);
exports.HomeSliderRoutes = router;
