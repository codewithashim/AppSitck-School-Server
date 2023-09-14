import express from "express";
import { TeacherController } from "./teacher.controller";
const router = express.Router();

router.get("/", TeacherController.getAllTeacher);
router.get("/get-message", TeacherController.getAllMessage);

router.get("/get-singel/:id", TeacherController.getTeacherById);

router.get("/get-message/:id", TeacherController.getMessageById);

router.post("/create", TeacherController.createTeacher);

router.post("/create-message", TeacherController.createMessage);

router.patch("/update/:id", TeacherController.updateTeacher);

router.patch("/update-message/:id", TeacherController.updateMessage);

router.delete("/delete/:id", TeacherController.deleteTeacher);

router.delete("/delete-message/:id", TeacherController.deleteMessage);

export const TeacherRoutes = router;
