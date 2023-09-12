import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ResultService } from "./result.service";
import { IResult } from "./result.interface";
import uploadFileToDrive from "../../middlewares/uploadFileToDrive";

const createResult = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const resultData = req.body;
  const { filename , path} = req?.file;

  const data = {
    ...resultData,
    file: path,
  };

  const result = await ResultService.createResult(data);
  sendResponse<IResult>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Result created successfully!",
    data: result,
  });
});

const getAllResult = catchAsync(async (req: Request, res: Response) => {
  const result = await ResultService.getAllResult();

  sendResponse<IResult[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Result fetched successfully!",
    data: result,
  });
});

const getResultById = catchAsync(async (req: Request, res: Response) => {
  const result = await ResultService.getResultById(req?.params?.id);

  sendResponse<IResult>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Result fetched successfully!",
    data: result,
  });
});

const updateResult = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  // const updatedData = req.body;
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const resultData = req.body;
  const { filename , path} = req?.file;

  const data = {
    ...resultData,
    file: path,
  };

  const result = await ResultService.updateResultById(id, data);

  sendResponse<IResult>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Result updated successfully!",
    data: result,
  });
});

const deleteResult = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ResultService.deleteResultById(id);
  sendResponse<IResult>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Result deleted successfully!",
    data: result,
  });
});

export const ResultController = {
  getAllResult,
  getResultById,
  updateResult,
  deleteResult,
  createResult,
};
