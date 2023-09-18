import express from "express";
import { PhotoGelaryController } from "./photoGelary.controller";
const router = express.Router();

router.post("/create", PhotoGelaryController.createPhotoGelary);

router.post("/album/create", PhotoGelaryController.createAlbum);

router.get("/get-singel/:id", PhotoGelaryController.getPhotoGelaryById);

router.get("/get-all", PhotoGelaryController.getAllPhotoGelary);

router.get("/album/:id", PhotoGelaryController.getAlbumById);

router.get("/album", PhotoGelaryController.getAllAlbum);



router.get("/album/:album", PhotoGelaryController.getPhotoGelaryByAlbum);

router.patch("/update/:id", PhotoGelaryController.updatePhotoGelary);

router.delete("/delete/:id", PhotoGelaryController.deletePhotoGelary);

router.delete("/album/:id", PhotoGelaryController.deleteAlbum);

router.delete("/album/photo/:id", PhotoGelaryController.deletePhotoFromAlbumAndPhotoGelary);



export const PhotoGelaryRoutes = router;
