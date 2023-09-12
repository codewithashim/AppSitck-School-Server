import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { HomeSliderService } from "./homeslider.service";
import { IHomeSlider } from "./homeslider.interface";

const createHomeSlider = catchAsync(async (req: Request, res: Response) => {
  const homeSliderData = req.body;
  const result = await HomeSliderService.createHomeSlider(homeSliderData);
  sendResponse<IHomeSlider>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "HomeSlider created successfully!",
    data: result,
  });
});

const getAllHomeSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeSliderService.getAllHomeSlider();
  sendResponse<IHomeSlider[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "HomeSlider fetched successfully!",
    data: result,
  });
});

const getHomeSliderById = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeSliderService.getHomeSliderById(req.params.id);

  sendResponse<IHomeSlider>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "HomeSlider fetched successfully!",
    data: result,
  });
});

const updateHomeSlider = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await HomeSliderService.updateHomeSliderById(id, updatedData);

  sendResponse<IHomeSlider>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "HomeSlider updated successfully!",
    data: result,
  });
});

const deleteHomeSlider = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await HomeSliderService.deleteHomeSliderById(id);
  sendResponse<IHomeSlider>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "HomeSlider deleted successfully!",
    data: result,
  });
});

export const HomeSliderController = {
  getAllHomeSlider,
  getHomeSliderById,
  updateHomeSlider,
  deleteHomeSlider,
  createHomeSlider,
};
