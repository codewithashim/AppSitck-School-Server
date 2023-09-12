"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const logo_controller_1 = require("./logo.controller");
const router = express_1.default.Router();
router.get("/", logo_controller_1.LogoController.getAllLogo);
router.get("/:id", logo_controller_1.LogoController.getLogoById);
router.post("/create", logo_controller_1.LogoController.createLogo);
router.patch("/:id", logo_controller_1.LogoController.updateLogo);
router.delete("/:id", logo_controller_1.LogoController.deleteLogo);
exports.LogoRoutes = router;
