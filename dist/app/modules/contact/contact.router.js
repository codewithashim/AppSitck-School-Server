"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("./contact.controller");
const router = express_1.default.Router();
router.get("/", contact_controller_1.ContactController.getAllContact);
router.get("/:id", contact_controller_1.ContactController.getContactById);
router.post("/create", contact_controller_1.ContactController.createContact);
router.patch("/:id", contact_controller_1.ContactController.updateContact);
router.delete("/:id", contact_controller_1.ContactController.deleteContact);
exports.ContactRoutes = router;
