import express from "express";
import { AboutController } from "./about.controller";
const router = express.Router();

router.get("/", AboutController.getAllAbout);

router.get("/get-singel/:id", AboutController.getAboutById);

router.post(
  "/create",
  AboutController.createAbout
);

router.patch("/update/:id", AboutController.updateAbout);

router.delete(
  "/delete/:id",
  AboutController.deleteAbout
);


export const AboutRoutes = router;