import express from "express";
import { StaffController } from "./staff.controller";
const router = express.Router();

router.get("/", StaffController.getAllStaff);

router.get("/get-singel/:id", StaffController.getStaffById);

router.post(
  "/create",
  StaffController.createStaff
);

router.patch("/update/:id",  StaffController.updateStaff);

router.delete(
  "/delete/:id",
  StaffController.deleteStaff
);


export const StaffRoutes = router;