import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserController } from "./user.controller";
import { createUserValidator } from "./user.validation";
const router = express.Router();

router.get("/",  UserController.getAllUsers);
router.get("/:id",  UserController.getUserById);

router.patch(
  "/:id",
  
  validateRequest(createUserValidator.updateUserZodSchema),
  UserController.updateUser
);
router.delete("/:id", UserController.deleteUser);


export const UserRoutes = router;
