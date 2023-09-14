import express from "express";
import { FooterController } from "./footer.controller";
const router = express.Router();

router.get("/", FooterController.getAllFooter);

router.get("/get-link", FooterController.getAllLink);

router.get("/get-singel/:id", FooterController.getHeadeerById);

router.get("/get-link/:id", FooterController.getLinkById);

router.post("/create", FooterController.createFooter);

router.post("/create-link", FooterController.createLink);

router.patch("/update/:id", FooterController.updateFooter);

router.patch("/update-link/:id", FooterController.updateLink);

router.delete("/delete/:id", FooterController.deleteFooter);

router.delete("/delete-link/:id", FooterController.deleteLink);

export const FooterRoutes = router;
