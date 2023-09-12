import express from "express";
import { EventController } from "./event.controller";
import upload from "../../middlewares/multer";

const router = express.Router();

router.post("/create", upload.single("file"), EventController.createEvent);

router.get("/", EventController.getAllEvent);

router.get("/get-singel/:id", EventController.getEventById);

router.patch("/update/:id", upload.single("file"), EventController.updateEvent);

router.delete("/delete/:id", EventController.deleteEvent);

export const EventRoutes = router;
