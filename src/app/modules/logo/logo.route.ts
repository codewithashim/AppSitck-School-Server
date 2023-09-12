import express from "express";
import { LogoController } from "./logo.controller";
const router = express.Router();

router.get("/", LogoController.getAllLogo);

router.get("/:id", LogoController.getLogoById);

router.post(
  "/create",
  LogoController.createLogo
);

router.patch("/:id", LogoController.updateLogo);

router.delete(
  "/:id",
  LogoController.deleteLogo
);


export const LogoRoutes = router;