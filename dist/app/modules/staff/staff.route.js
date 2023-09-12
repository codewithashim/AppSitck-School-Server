"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRoutes = void 0;
const express_1 = __importDefault(require("express"));
const staff_controller_1 = require("./staff.controller");
const router = express_1.default.Router();
router.get("/", staff_controller_1.StaffController.getAllStaff);
router.get("/:id", staff_controller_1.StaffController.getStaffById);
router.post("/create", staff_controller_1.StaffController.createStaff);
router.patch("/:id", staff_controller_1.StaffController.updateStaff);
router.delete("/:id", staff_controller_1.StaffController.deleteStaff);
exports.StaffRoutes = router;
