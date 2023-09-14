import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { RutineService } from "./rutine.service";
import { IRutine } from "./rutine.interface";

const createRutine = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const rutineData = req.body;
  const { filename, path } = req?.file;

  const data = {
    ...rutineData,
    file: path,
  };

  const Rutine = await RutineService.createRutine(data);
  sendResponse<IRutine>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Rutine created successfully!",
    data: Rutine,
  });
});

const getAllRutine = catchAsync(async (req: Request, res: Response) => {
  const Rutine = await RutineService.getAllRutine();

  sendResponse<IRutine[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rutine fetched successfully!",
    data: Rutine,
  });
});

const getRutineById = catchAsync(async (req: Request, res: Response) => {
  const Rutine = await RutineService.getRutineById(req?.params?.id);

  sendResponse<IRutine>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rutine fetched successfully!",
    data: Rutine,
  });
});

const getRutinesByClass = catchAsync(async (req: Request, res: Response) => {
  const Rutine = await RutineService.getRutinesByClass(req?.params?.class);

  sendResponse<IRutine[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rutine fetched successfully!",
    data: Rutine,
  });
})


const updateRutine = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  // const updatedData = req.body;
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const RutineData = req.body;
  const { filename, path } = req?.file;

  const data = {
    ...RutineData,
    file: path,
  };

  const Rutine = await RutineService.updateRutineById(id, data);

  sendResponse<IRutine>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rutine updated successfully!",
    data: Rutine,
  });
});

const deleteRutine = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Rutine = await RutineService.deleteRutineById(id);
  sendResponse<IRutine>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Rutine deleted successfully!",
    data: Rutine,
  });
});

export const RutineController = {
  getAllRutine,
  getRutineById,
  updateRutine,
  deleteRutine,
  createRutine,
  getRutinesByClass
};
