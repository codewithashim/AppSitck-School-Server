import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StudentPortalService } from "./studentPortal.service";
import { IStudentPortal } from "./studentPortal.interface";

const createStudentPortal = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const StudentPortalData = req.body;
  const { filename , path} = req?.file;

  const data = {
    ...StudentPortalData,
    file: path,
  };

  const StudentPortal = await StudentPortalService.createStudentPortal(data);
  sendResponse<IStudentPortal>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "StudentPortal created successfully!",
    data: StudentPortal,
  });
});

const getAllStudentPortal = catchAsync(async (req: Request, res: Response) => {
  const StudentPortal = await StudentPortalService.getAllStudentPortal();

  sendResponse<IStudentPortal[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "StudentPortal fetched successfully!",
    data: StudentPortal,
  });
});

const getStudentPortalById = catchAsync(async (req: Request, res: Response) => {
  const StudentPortal = await StudentPortalService.getStudentPortalById(req?.params?.id);

  sendResponse<IStudentPortal>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "StudentPortal fetched successfully!",
    data: StudentPortal,
  });
});

const updateStudentPortal = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  // const updatedData = req.body;
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const StudentPortalData = req.body;
  const { filename , path} = req?.file;

  const data = {
    ...StudentPortalData,
    file: path,
  };

  const StudentPortal = await StudentPortalService.updateStudentPortalById(id, data);

  sendResponse<IStudentPortal>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "StudentPortal updated successfully!",
    data: StudentPortal,
  });
});

const deleteStudentPortal = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const StudentPortal = await StudentPortalService.deleteStudentPortalById(id);
  sendResponse<IStudentPortal>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "StudentPortal deleted successfully!",
    data: StudentPortal,
  });
});

export const StudentPortalController = {
  getAllStudentPortal,
  getStudentPortalById,
  updateStudentPortal,
  deleteStudentPortal,
  createStudentPortal,
};
