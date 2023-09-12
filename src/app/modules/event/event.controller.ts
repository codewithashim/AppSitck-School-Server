import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { EventService } from "./event.service";
import { IEvent } from "./event.interface";

const createEvent = catchAsync(async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }
  const eventData = req.body;
  const { path } = req?.file;

  const data = {
    ...eventData,
    file: path,
  };

  const result = await EventService.createEvent(data);
  sendResponse<IEvent>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Event created successfully!",
    data: result,
  });
});

const getAllEvent = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.getAllEvent();

  sendResponse<IEvent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event fetched successfully!",
    data: result,
  });
});

const getEventById = catchAsync(async (req: Request, res: Response) => {
  const result = await EventService.getEventById(req.params.id);

  sendResponse<IEvent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event fetched successfully!",
    data: result,
  });
});

const updateEvent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!req.file) {
    res.status(400).json({ error: "No file uploaded" });
    return;
  }

  
  const eventData = req.body;
  const {  path } = req?.file;

  const data = {
    ...eventData,
    file: path,
  };

  const result = await EventService.updateEventById(id, data);

  sendResponse<IEvent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event updated successfully!",
    data: result,
  });
});

const deleteEvent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EventService.deleteEventById(id);
  sendResponse<IEvent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Event deleted successfully!",
    data: result,
  });
});

export const EventController = {
  getAllEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  createEvent,
};
