"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultRoutes = void 0;
const express_1 = __importDefault(require("express"));
const result_controller_1 = require("./result.controller");
const multer_1 = __importDefault(require("../../middlewares/multer"));
const router = express_1.default.Router();
router.post("/create", multer_1.default.single("file"), result_controller_1.ResultController.createResult);
router.get("/", result_controller_1.ResultController.getAllResult);
router.get("/:id", result_controller_1.ResultController.getResultById);
router.patch("/:id", multer_1.default.single("file"), result_controller_1.ResultController.updateResult);
router.delete("/:id", result_controller_1.ResultController.deleteResult);
exports.ResultRoutes = router;
