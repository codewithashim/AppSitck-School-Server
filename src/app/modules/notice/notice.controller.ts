import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { NoticeService } from "./notice.service";
import { INotice } from "./notice.interface";
import uploadFileToDrive from "../../middlewares/uploadFileToDrive";

const createNotice = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const noticeData = req.body;
  const {  path } = req?.file;


  const data = {
    ...noticeData,
    file: path,
  };

  const result = await NoticeService.createNotice(data);
  sendResponse<INotice>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Notice created successfully!",
    data: result,
  });
});

const getAllNotice = catchAsync(async (req: Request, res: Response) => {
  const result = await NoticeService.getAllNotice();

  sendResponse<INotice[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notice fetched successfully!",
    data: result,
  });
});

const getNoticeById = catchAsync(async (req: Request, res: Response) => {
  const result = await NoticeService.getNoticeById(req.params.id);

  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notice fetched successfully!",
    data: result,
  });
});

const updateNotice = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const noticeData = req.body;
  const { filename , path} = req?.file;
 

  const data = {
    ...noticeData,
    file: path,
  };

  const result = await NoticeService.updateNoticeById(id, data);

  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notice updated successfully!",
    data: result,
  });
});

const deleteNotice = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await NoticeService.deleteNoticeById(id);
  sendResponse<INotice>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notice deleted successfully!",
    data: result,
  });
});

export const NoticeController = {
  getAllNotice,
  getNoticeById,
  updateNotice,
  deleteNotice,
  createNotice,
};
