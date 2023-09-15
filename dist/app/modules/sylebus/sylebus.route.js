"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylebusRoutes = void 0;
const express_1 = __importDefault(require("express"));
const sylebus_controller_1 = require("./sylebus.controller");
const multer_1 = __importDefault(require("../../middlewares/multer"));
const router = express_1.default.Router();
router.post("/create", multer_1.default.single("file"), sylebus_controller_1.SylebusController.createSylebus);
router.get("/", sylebus_controller_1.SylebusController.getAllSylebus);
router.get("/get-singel/:id", sylebus_controller_1.SylebusController.getSylebusById);
router.get("/get-by-class/:class", sylebus_controller_1.SylebusController.getSylebussByClass);
router.patch("/update/:id", multer_1.default.single("file"), sylebus_controller_1.SylebusController.updateSylebus);
router.delete("/delete/:id", sylebus_controller_1.SylebusController.deleteSylebus);
exports.SylebusRoutes = router;
