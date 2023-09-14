import express from "express";
import { SylebusController } from "./sylebus.controller";
import upload from "../../middlewares/multer";
const router = express.Router();

router.post("/create",  upload.single("file"), SylebusController.createSylebus);

router.get("/", SylebusController.getAllSylebus);

router.get("/get-singel/:id", SylebusController.getSylebusById);

router.get("/get-by-class/:class", SylebusController.getSylebussByClass);

router.patch("/update/:id",upload.single("file"),  SylebusController.updateSylebus);

router.delete("/delete/:id", SylebusController.deleteSylebus);


export const SylebusRoutes = router;
