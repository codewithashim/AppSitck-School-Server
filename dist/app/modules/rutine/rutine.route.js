"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RutineRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rutine_controller_1 = require("./rutine.controller");
const multer_1 = __importDefault(require("../../middlewares/multer"));
const router = express_1.default.Router();
router.post("/create", multer_1.default.single("file"), rutine_controller_1.RutineController.createRutine);
router.get("/", rutine_controller_1.RutineController.getAllRutine);
router.get("/get-singel/:id", rutine_controller_1.RutineController.getRutineById);
router.get("/get-by-class/:class", rutine_controller_1.RutineController.getRutinesByClass);
router.patch("/update/:id", multer_1.default.single("file"), rutine_controller_1.RutineController.updateRutine);
router.delete("/delete/:id", rutine_controller_1.RutineController.deleteRutine);
exports.RutineRoutes = router;
