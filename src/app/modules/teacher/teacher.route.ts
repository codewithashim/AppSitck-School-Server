import express from "express";
import { TeacherController } from "./teacher.controller";
const router = express.Router();

router.get("/", TeacherController.getAllTeacher);

router.get("/get-singel/:id", TeacherController.getTeacherById);

router.post(
  "/create",
  TeacherController.createTeacher
);

router.patch("/update/:id",  TeacherController.updateTeacher);

router.delete(
  "/delete/:id",
  TeacherController.deleteTeacher
);


export const TeacherRoutes = router;