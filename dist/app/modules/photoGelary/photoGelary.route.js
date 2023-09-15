"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoGelaryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const photoGelary_controller_1 = require("./photoGelary.controller");
const router = express_1.default.Router();
router.post("/create", photoGelary_controller_1.PhotoGelaryController.createPhotoGelary);
router.post("/album/create", photoGelary_controller_1.PhotoGelaryController.createAlbum);
router.get("/", photoGelary_controller_1.PhotoGelaryController.getAllPhotoGelary);
router.get("/album/:album", photoGelary_controller_1.PhotoGelaryController.getPhotoGelaryByAlbum);
router.get("/album", photoGelary_controller_1.PhotoGelaryController.getAllAlbum);
router.get("/get-singel/:id", photoGelary_controller_1.PhotoGelaryController.getPhotoGelaryById);
router.patch("/update/:id", photoGelary_controller_1.PhotoGelaryController.updatePhotoGelary);
router.delete("/delete/:id", photoGelary_controller_1.PhotoGelaryController.deletePhotoGelary);
router.delete("/album/:id", photoGelary_controller_1.PhotoGelaryController.deleteAlbum);
exports.PhotoGelaryRoutes = router;
