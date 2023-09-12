import express from "express";
import { CommitteeController } from "./committee.controller";
const router = express.Router();

router.get("/", CommitteeController.getAllCommittee);

router.get("/get-singel/:id", CommitteeController.getCommitteeById);

router.post(
  "/create",
  CommitteeController.createCommittee
);

router.patch("/update/:id",  CommitteeController.updateCommittee);

router.delete(
  "/delete/:id",
  CommitteeController.deleteCommittee
);


export const CommitteeRoutes = router;