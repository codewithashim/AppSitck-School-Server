import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StaffService } from "./staff.service";
import { IStaff } from "./staff.interface";

const createStaff = catchAsync(async (req: Request, res: Response) => {
  const StaffData = req.body;
  const Staff = await StaffService.createStaff(StaffData);
  sendResponse<IStaff>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Staff created successfully!",
    data: Staff,
  });
});

const getAllStaff = catchAsync(async (req: Request, res: Response) => {
  const Staff = await StaffService.getAllStaff();

  sendResponse<IStaff[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Staff fetched successfully!",
    data: Staff,
  });
});

const getStaffById = catchAsync(async (req: Request, res: Response) => {
  const Staff = await StaffService.getStaffById(req.params.id);

  sendResponse<IStaff>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Staff fetched successfully!",
    data: Staff,
  });
});

const updateStaff = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const Staff = await StaffService.updateStaffById(id, updatedData);

  sendResponse<IStaff>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Staff updated successfully!",
    data: Staff,
  });
});

const deleteStaff = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Staff = await StaffService.deleteStaffById(id);
  sendResponse<IStaff>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Staff deleted successfully!",
    data: Staff,
  });
});

export const StaffController = {
  getAllStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  createStaff,
};
