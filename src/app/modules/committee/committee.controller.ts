import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CommitteeService } from "./committee.service";
import { ICommittee } from "./committee.interface";

const createCommittee = catchAsync(async (req: Request, res: Response) => {
  const CommitteeData = req.body;
  const Committee = await CommitteeService.createCommittee(CommitteeData);
  sendResponse<ICommittee>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Committee created successfully!",
    data: Committee,
  });
});

const getAllCommittee = catchAsync(async (req: Request, res: Response) => {
  const Committee = await CommitteeService.getAllCommittee();

  sendResponse<ICommittee[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Committee fetched successfully!",
    data: Committee,
  });
});

const getCommitteeById = catchAsync(async (req: Request, res: Response) => {
  const Committee = await CommitteeService.getCommitteeById(req.params.id);

  sendResponse<ICommittee>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Committee fetched successfully!",
    data: Committee,
  });
});

const updateCommittee = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const Committee = await CommitteeService.updateCommitteeById(id, updatedData);

  sendResponse<ICommittee>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Committee updated successfully!",
    data: Committee,
  });
});

const deleteCommittee = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Committee = await CommitteeService.deleteCommitteeById(id);
  sendResponse<ICommittee>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Committee deleted successfully!",
    data: Committee,
  });
});

export const CommitteeController = {
  getAllCommittee,
  getCommitteeById,
  updateCommittee,
  deleteCommittee,
  createCommittee,
};
