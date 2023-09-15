"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const footer_controller_1 = require("./footer.controller");
const router = express_1.default.Router();
router.get("/", footer_controller_1.FooterController.getAllFooter);
router.get("/get-link", footer_controller_1.FooterController.getAllLink);
router.get("/get-singel/:id", footer_controller_1.FooterController.getHeadeerById);
router.get("/get-link/:id", footer_controller_1.FooterController.getLinkById);
router.post("/create", footer_controller_1.FooterController.createFooter);
router.post("/create-link", footer_controller_1.FooterController.createLink);
router.patch("/update/:id", footer_controller_1.FooterController.updateFooter);
router.patch("/update-link/:id", footer_controller_1.FooterController.updateLink);
router.delete("/delete/:id", footer_controller_1.FooterController.deleteFooter);
router.delete("/delete-link/:id", footer_controller_1.FooterController.deleteLink);
exports.FooterRoutes = router;