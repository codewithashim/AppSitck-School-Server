import express from "express";
import {StudentPortalController } from "./studentPortal.controller";
const router = express.Router();

router.post("/create", StudentPortalController.createStudentPortal);

router.get("/",StudentPortalController.getAllStudentPortal);


router.patch("/update/:id",StudentPortalController.updateStudentPortal);

router.delete("/delete/:id",StudentPortalController.deleteStudentPortal);

router.get("/get-singel/:id",StudentPortalController.getStudentPortalById);


export const StudentPortalRoutes = router;
