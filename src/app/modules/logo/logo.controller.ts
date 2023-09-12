import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { LogoService } from "./logo.service";
import { ILogo } from "./logo.interface";

const createLogo = catchAsync(async (req: Request, res: Response) => {
  const LogoData = req.body;
  const result = await LogoService.createLogo(LogoData);
  sendResponse<ILogo>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Logo created successfully!",
    data: result,
  });
});

const getAllLogo = catchAsync(async (req: Request, res: Response) => {
  const result = await LogoService.getAllLogo();

  sendResponse<ILogo[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logo fetched successfully!",
    data: result,
  });
});

const getLogoById = catchAsync(async (req: Request, res: Response) => {
  const result = await LogoService.getLogoById(req.params.id);

  sendResponse<ILogo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logo fetched successfully!",
    data: result,
  });
});

const updateLogo = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await LogoService.updateLogoById(id, updatedData);

  sendResponse<ILogo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logo updated successfully!",
    data: result,
  });
});

const deleteLogo = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await LogoService.deleteLogoById(id);
  sendResponse<ILogo>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logo deleted successfully!",
    data: result,
  });
});

export const LogoController = {
  getAllLogo,
  getLogoById,
  updateLogo,
  deleteLogo,
  createLogo,
};
