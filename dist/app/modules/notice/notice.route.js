"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const notice_controller_1 = require("./notice.controller");
const multer_1 = __importDefault(require("../../middlewares/multer"));
const router = express_1.default.Router();
router.post("/create", multer_1.default.single("file"), notice_controller_1.NoticeController.createNotice);
router.get("/", notice_controller_1.NoticeController.getAllNotice);
router.get("/:id", notice_controller_1.NoticeController.getNoticeById);
router.patch("/:id", multer_1.default.single("file"), notice_controller_1.NoticeController.updateNotice);
router.delete("/:id", notice_controller_1.NoticeController.deleteNotice);
exports.NoticeRoutes = router;
