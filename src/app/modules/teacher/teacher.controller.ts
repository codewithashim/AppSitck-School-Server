import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { TeacherService } from "./teacher.service";
import { ITeacher } from "./teacher.interface";

const createTeacher = catchAsync(async (req: Request, res: Response) => {
  const TeacherData = req.body;
  const Teacher = await TeacherService.createTeacher(TeacherData);
  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Teacher created successfully!",
    data: Teacher,
  });
});

const getAllTeacher = catchAsync(async (req: Request, res: Response) => {
  const Teacher = await TeacherService.getAllTeacher();

  sendResponse<ITeacher[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Teacher fetched successfully!",
    data: Teacher,
  });
});

const getTeacherById = catchAsync(async (req: Request, res: Response) => {
  const Teacher = await TeacherService.getTeacherById(req.params.id);

  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Teacher fetched successfully!",
    data: Teacher,
  });
});

const updateTeacher = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const Teacher = await TeacherService.updateTeacherById(id, updatedData);

  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Teacher updated successfully!",
    data: Teacher,
  });
});

const deleteTeacher = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Teacher = await TeacherService.deleteTeacherById(id);
  sendResponse<ITeacher>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Teacher deleted successfully!",
    data: Teacher,
  });
});

export const TeacherController = {
  getAllTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
  createTeacher,
};
