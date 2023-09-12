import express from "express";
import { NoticeController } from "./notice.controller";
import upload from "../../middlewares/multer";
const router = express.Router();

router.post("/create", upload.single("file"), NoticeController.createNotice);

router.get("/", NoticeController.getAllNotice);

router.get("/get-singel/:id", NoticeController.getNoticeById);

router.patch("/update/:id", upload.single("file"), NoticeController.updateNotice);

router.delete("/delete/:id", NoticeController.deleteNotice);

export const NoticeRoutes = router;
