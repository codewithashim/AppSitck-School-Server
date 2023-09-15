"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = __importDefault(require("express"));
const event_controller_1 = require("./event.controller");
const multer_1 = __importDefault(require("../../middlewares/multer"));
const router = express_1.default.Router();
router.post("/create", multer_1.default.single("file"), event_controller_1.EventController.createEvent);
router.get("/", event_controller_1.EventController.getAllEvent);
router.get("/get-singel/:id", event_controller_1.EventController.getEventById);
router.patch("/update/:id", multer_1.default.single("file"), event_controller_1.EventController.updateEvent);
router.delete("/delete/:id", event_controller_1.EventController.deleteEvent);
exports.EventRoutes = router;
