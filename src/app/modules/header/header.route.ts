import express from "express";
import { HeaderController } from "./header.controller";
const router = express.Router();

router.get("/", HeaderController.getAllHeader);

router.get("/get-singel/:id", HeaderController.getHeadeerById);

router.post(
  "/create",
  HeaderController.createHeader
);

router.patch("/update/:id", HeaderController.updateHeader);

router.delete(
  "/delete/:id",
  HeaderController.deleteHeader
);


export const HeaderRoutes = router;