import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SylebusService } from "./sylebus.service";
import { ISylebus } from "./sylebus.interface";

const createSylebus = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const sylebusData = req.body;
  const { filename, path } = req?.file;

  const data = {
    ...sylebusData,
    file: path,
  };

  const Sylebus = await SylebusService.createSylebus(data);
  sendResponse<ISylebus>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Sylebus created successfully!",
    data: Sylebus,
  });
});

const getAllSylebus = catchAsync(async (req: Request, res: Response) => {
  const Sylebus = await SylebusService.getAllSylebus();

  sendResponse<ISylebus[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sylebus fetched successfully!",
    data: Sylebus,
  });
});

const getSylebusById = catchAsync(async (req: Request, res: Response) => {
  const Sylebus = await SylebusService.getSylebusById(req?.params?.id);

  sendResponse<ISylebus>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sylebus fetched successfully!",
    data: Sylebus,
  });
});

const getSylebussByClass = catchAsync(async (req: Request, res: Response) => {
  const Sylebus = await SylebusService.getSylebussByClass(req?.params?.class);

  sendResponse<ISylebus[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sylebus fetched successfully!",
    data: Sylebus,
  });
});

const updateSylebus = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  // const updatedData = req.body;
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const SylebusData = req.body;
  const { filename, path } = req?.file;

  const data = {
    ...SylebusData,
    file: path,
  };

  const Sylebus = await SylebusService.updateSylebusById(id, data);

  sendResponse<ISylebus>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sylebus updated successfully!",
    data: Sylebus,
  });
});

const deleteSylebus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Sylebus = await SylebusService.deleteSylebusById(id);
  sendResponse<ISylebus>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sylebus deleted successfully!",
    data: Sylebus,
  });
});

export const SylebusController = {
  getAllSylebus,
  getSylebusById,
  updateSylebus,
  deleteSylebus,
  createSylebus,
  getSylebussByClass,
};
