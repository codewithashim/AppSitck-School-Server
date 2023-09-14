import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FooterService } from "./footer.service";
import { IFooter, ILink } from "./footer.interface";

const createFooter = catchAsync(async (req: Request, res: Response) => {
  const FooterData = req.body;
  const result = await FooterService.createFooter(FooterData);
  sendResponse<IFooter>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Footer created successfully!",
    data: result,
  });
});

const getAllFooter = catchAsync(async (req: Request, res: Response) => {
  const result = await FooterService.getAllFooter();

  sendResponse<IFooter[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Footer fetched successfully!",
    data: result,
  });
});

const getHeadeerById = catchAsync(async (req: Request, res: Response) => {
  const result = await FooterService.getFooterById(req.params.id);

  sendResponse<IFooter>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Footer fetched successfully!",
    data: result,
  });
});

const updateFooter = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await FooterService.updateFooterById(id, updatedData);

  sendResponse<IFooter>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Footer updated successfully!",
    data: result,
  });
});

const deleteFooter = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FooterService.deleteFooterById(id);
  sendResponse<IFooter>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Heeader deleted successfully!",
    data: result,
  });
});

const createLink = catchAsync(async (req: Request, res: Response) => {
  const LinkData = req.body;
  const result = await FooterService.createLink(LinkData);
  sendResponse<ILink>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Link created successfully!",
    data: result,
  });
});

const getAllLink = catchAsync(async (req: Request, res: Response) => {
  const result = await FooterService.getAllLink();

  sendResponse<ILink[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link fetched successfully!",
    data: result,
  });
});

const getLinkById = catchAsync(async (req: Request, res: Response) => {
  const result = await FooterService.getLinkById(req.params.id);

  sendResponse<ILink>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link fetched successfully!",
    data: result,
  });
});

const updateLink = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await FooterService.updateLinkById(id, updatedData);

  sendResponse<ILink>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link updated successfully!",
    data: result,
  });
});

const deleteLink = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await FooterService.deleteLinkById(id);
  sendResponse<ILink>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Link deleted successfully!",
    data: result,
  });
});

export const FooterController = {
  getAllFooter,
  getHeadeerById,
  updateFooter,
  deleteFooter,
  createFooter,

  getAllLink,
  getLinkById,
  updateLink,
  deleteLink,
  createLink,
};
