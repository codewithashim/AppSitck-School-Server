import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ContactService } from "./contact.service";
import { IContact } from "./contact.interface";

const createContact = catchAsync(async (req: Request, res: Response) => {
  const ContactData = req.body;
  const result = await ContactService.createContact(ContactData);
  sendResponse<IContact>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Contact created successfully!",
    data: result,
  });
});

const getAllContact = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.getAllContact();

  sendResponse<IContact[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact fetched successfully!",
    data: result,
  });
});

const getContactById = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.getContactById(req.params.id);

  sendResponse<IContact>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact fetched successfully!",
    data: result,
  });
});

const updateContact = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await ContactService.updateContactById(id, updatedData);

  sendResponse<IContact>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact updated successfully!",
    data: result,
  });
});

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ContactService.deleteContactById(id);
  sendResponse<IContact>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Heeader deleted successfully!",
    data: result,
  });
});

export const ContactController = {
  getAllContact,
  getContactById,
  updateContact,
  deleteContact,
  createContact,
};
