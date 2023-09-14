import express from "express";
import { RutineController } from "./rutine.controller";
import upload from "../../middlewares/multer";
const router = express.Router();

router.post("/create",  upload.single("file"), RutineController.createRutine);

router.get("/", RutineController.getAllRutine);

router.get("/get-singel/:id", RutineController.getRutineById);

router.get("/get-by-class/:class", RutineController.getRutinesByClass);

router.patch("/update/:id",upload.single("file"),  RutineController.updateRutine);

router.delete("/delete/:id", RutineController.deleteRutine);


export const RutineRoutes = router;
