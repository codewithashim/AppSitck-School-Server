import express from "express";
import { ResultController } from "./result.controller";
import upload from "../../middlewares/multer";
const router = express.Router();

router.post("/create",  upload.single("file"), ResultController.createResult);

router.get("/", ResultController.getAllResult);

router.get("/get-singel/:id", ResultController.getResultById);

router.get("/get-by-class/:class", ResultController.getResultsByClass);

router.patch("/update/:id",upload.single("file"),  ResultController.updateResult);

router.delete("/delete/:id", ResultController.deleteResult);



export const ResultRoutes = router;
