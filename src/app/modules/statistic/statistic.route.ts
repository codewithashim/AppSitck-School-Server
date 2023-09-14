import express from "express";
import { StatisticController } from "./statistic.controller";
const router = express.Router();

router.get("/", StatisticController.getAllStatistic);

router.get("/get-singel/:id", StatisticController.getStatisticById);

router.post("/create", StatisticController.createStatistic);

router.patch("/update/:id", StatisticController.updateStatistic);

router.delete("/delete/:id", StatisticController.deleteStatistic);

router.post(
  "/create-organization",
  StatisticController.createOrganizationStatistic
);

router.get(
  "/get-organization",
  StatisticController.getAllOrganizationStatistic
);

router.get(
  "/get-organization/:id",
  StatisticController.getOrganizationStatisticById
);

router.patch(
  "/update-organization/:id",
  StatisticController.updateOrganizationStatistic
);

router.delete(
  "/delete-organization/:id",
  StatisticController.deleteOrganizationStatistic
);

export const StatisticRoutes = router;
