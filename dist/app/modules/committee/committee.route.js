"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitteeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const committee_controller_1 = require("./committee.controller");
const router = express_1.default.Router();
router.get("/", committee_controller_1.CommitteeController.getAllCommittee);
router.get("/:id", committee_controller_1.CommitteeController.getCommitteeById);
router.post("/create", committee_controller_1.CommitteeController.createCommittee);
router.patch("/:id", committee_controller_1.CommitteeController.updateCommittee);
router.delete("/:id", committee_controller_1.CommitteeController.deleteCommittee);
exports.CommitteeRoutes = router;
