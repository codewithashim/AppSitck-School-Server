import express from "express";
import { AboutController } from "./about.controller";
const router = express.Router();

router.get("/", AboutController.getAllAbout);

router.get("/:id", AboutController.getAboutById);

router.post(
  "/create",
  AboutController.createAbout
);

router.patch("/:id", AboutController.updateAbout);

router.delete(
  "/:id",
  AboutController.deleteAbout
);


export const AboutRoutes = router;