import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { StatisticService } from "./statistic.service";
import { IStatistic } from "./statistic.interface";

const createStatistic = catchAsync(async (req: Request, res: Response) => {
  const StatisticData = req.body;
  const Statistic = await StatisticService.createStatistic(StatisticData);
  sendResponse<IStatistic>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Statistic created successfully!",
    data: Statistic,
  });
});

const getAllStatistic = catchAsync(async (req: Request, res: Response) => {
  const Statistic = await StatisticService.getAllStatistic();

  sendResponse<IStatistic[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Statistic fetched successfully!",
    data: Statistic,
  });
});

const getStatisticById = catchAsync(async (req: Request, res: Response) => {
  const Statistic = await StatisticService.getStatisticById(req.params.id);

  sendResponse<IStatistic>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Statistic fetched successfully!",
    data: Statistic,
  });
});

const updateStatistic = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const Statistic = await StatisticService.updateStatisticById(id, updatedData);

  sendResponse<IStatistic>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Statistic updated successfully!",
    data: Statistic,
  });
});

const deleteStatistic = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Statistic = await StatisticService.deleteStatisticById(id);
  sendResponse<IStatistic>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Statistic deleted successfully!",
    data: Statistic,
  });
});

export const StatisticController = {
  getAllStatistic,
  getStatisticById,
  updateStatistic,
  deleteStatistic,
  createStatistic,
};
