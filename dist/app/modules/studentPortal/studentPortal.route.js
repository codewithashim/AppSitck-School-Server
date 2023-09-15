"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentPortalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const studentPortal_controller_1 = require("./studentPortal.controller");
const router = express_1.default.Router();
router.post("/create", studentPortal_controller_1.StudentPortalController.createStudentPortal);
router.get("/", studentPortal_controller_1.StudentPortalController.getAllStudentPortal);
router.patch("/update/:id", studentPortal_controller_1.StudentPortalController.updateStudentPortal);
router.delete("/delete/:id", studentPortal_controller_1.StudentPortalController.deleteStudentPortal);
router.get("/get-singel/:id", studentPortal_controller_1.StudentPortalController.getStudentPortalById);
exports.StudentPortalRoutes = router;
