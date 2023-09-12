import express from "express";
import { PhotoGelaryController } from "./photoGelary.controller";
const router = express.Router();

router.post("/create", PhotoGelaryController.createPhotoGelary);

router.post("/album/create", PhotoGelaryController.createAlbum);

router.get("/", PhotoGelaryController.getAllPhotoGelary);



router.get("/album/:album", PhotoGelaryController.getPhotoGelaryByAlbum);

router.get("/album", PhotoGelaryController.getAllAlbum);

router.get("/get-singel/:id", PhotoGelaryController.getPhotoGelaryById);

router.patch("/update/:id", PhotoGelaryController.updatePhotoGelary);

router.delete("/delete/:id", PhotoGelaryController.deletePhotoGelary);

router.delete("/album/:id", PhotoGelaryController.deleteAlbum);

export const PhotoGelaryRoutes = router;
