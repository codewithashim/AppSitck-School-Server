"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRoutes = void 0;
const express_1 = __importDefault(require("express"));
const teacher_controller_1 = require("./teacher.controller");
const router = express_1.default.Router();
router.get("/", teacher_controller_1.TeacherController.getAllTeacher);
router.get("/get-singel/:id", teacher_controller_1.TeacherController.getTeacherById);
router.post("/create", teacher_controller_1.TeacherController.createTeacher);
router.patch("/update/:id", teacher_controller_1.TeacherController.updateTeacher);
router.delete("/delete/:id", teacher_controller_1.TeacherController.deleteTeacher);
exports.TeacherRoutes = router;
