import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AboutService } from "./about.service";
import { IAbout } from "./about.interface";

const createAbout = catchAsync(async (req: Request, res: Response) => {
  const AboutData = req.body;
  const result = await AboutService.createAbout(AboutData);
  sendResponse<IAbout>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "About created successfully!",
    data: result,
  });
});

const getAllAbout = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutService.getAllAbout();

  sendResponse<IAbout[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About fetched successfully!",
    data: result,
  });
});

const getAboutById = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutService.getAboutById(req.params.id);

  sendResponse<IAbout>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About fetched successfully!",
    data: result,
  });
});

const updateAbout = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await AboutService.updateAboutById(id, updatedData);

  sendResponse<IAbout>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "About updated successfully!",
    data: result,
  });
});

const deleteAbout = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await AboutService.deleteAboutById(id);
  sendResponse<IAbout>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Heeader deleted successfully!",
    data: result,
  });
});

export const AboutController = {
  getAllAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
  createAbout,
};
