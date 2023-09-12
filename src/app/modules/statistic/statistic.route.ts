import express from "express";
import { StatisticController } from "./statistic.controller";
const router = express.Router();

router.get("/", StatisticController.getAllStatistic);

router.get("/get-singel/:id", StatisticController.getStatisticById);

router.post(
  "/create",
  StatisticController.createStatistic
);

router.patch("/update/:id",  StatisticController.updateStatistic);

router.delete(
  "/delete/:id",
  StatisticController.deleteStatistic
);


export const StatisticRoutes = router;