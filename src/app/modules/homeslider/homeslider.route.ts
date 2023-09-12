import express from "express";
import { HomeSliderController } from "./homeslider.controller";
const router = express.Router();

router.get("/", HomeSliderController.getAllHomeSlider);

router.get("/get-singel/:id", HomeSliderController.getHomeSliderById);

router.post(
  "/create",
  HomeSliderController.createHomeSlider
);

router.patch("/update/:id",HomeSliderController.updateHomeSlider);

router.delete(
  "/delete/:id",
  HomeSliderController.deleteHomeSlider
);


export const HomeSliderRoutes = router;