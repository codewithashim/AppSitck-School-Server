import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { HeaderService } from "./header.service";
import { IHeader } from "./header.interface";

const createHeader = catchAsync(async (req: Request, res: Response) => {
  const headerData = req.body;
  const result = await HeaderService.createHeader(headerData);
  sendResponse<IHeader>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Header created successfully!",
    data: result,
  });
});

const getAllHeader = catchAsync(async (req: Request, res: Response) => {
  const result = await HeaderService.getAllHeader();

  sendResponse<IHeader[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Header fetched successfully!",
    data: result,
  });
});

const getHeadeerById = catchAsync(async (req: Request, res: Response) => {
  const result = await HeaderService.getHeaderById(req.params.id);

  sendResponse<IHeader>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Header fetched successfully!",
    data: result,
  });
});

const updateHeader = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await HeaderService.updateHeaderById(id, updatedData);

  sendResponse<IHeader>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Header updated successfully!",
    data: result,
  });
});

const deleteHeader = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HeaderService.deleteHeaderById(id);
  sendResponse<IHeader>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Heeader deleted successfully!",
    data: result,
  });
});

export const HeaderController = {
  getAllHeader,
  getHeadeerById,
  updateHeader,
  deleteHeader,
  createHeader,
};
