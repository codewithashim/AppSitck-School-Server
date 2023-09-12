import express from "express";
import { ContactController } from "./contact.controller";
const router = express.Router();

router.post(
  "/create",
  ContactController.createContact
);

router.get("/", ContactController.getAllContact);

router.get("/get-singel/:id", ContactController.getContactById);



router.patch("/update/:id",ContactController.updateContact);

router.delete(
  "/delete/:id",
  ContactController.deleteContact
);


export const ContactRoutes = router;