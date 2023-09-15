"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const header_controller_1 = require("./header.controller");
const router = express_1.default.Router();
router.get("/", header_controller_1.HeaderController.getAllHeader);
router.get("/get-singel/:id", header_controller_1.HeaderController.getHeadeerById);
router.post("/create", header_controller_1.HeaderController.createHeader);
router.patch("/update/:id", header_controller_1.HeaderController.updateHeader);
router.delete("/delete/:id", header_controller_1.HeaderController.deleteHeader);
exports.HeaderRoutes = router;
