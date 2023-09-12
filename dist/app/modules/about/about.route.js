"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutRoutes = void 0;
const express_1 = __importDefault(require("express"));
const about_controller_1 = require("./about.controller");
const router = express_1.default.Router();
router.get("/", about_controller_1.AboutController.getAllAbout);
router.get("/:id", about_controller_1.AboutController.getAboutById);
router.post("/create", about_controller_1.AboutController.createAbout);
router.patch("/:id", about_controller_1.AboutController.updateAbout);
router.delete("/:id", about_controller_1.AboutController.deleteAbout);
exports.AboutRoutes = router;
