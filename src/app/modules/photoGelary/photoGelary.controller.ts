import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PhotoGelaryService } from "./photoGelary.service";
import { IAlbum, IPhotoGelary } from "./photoGelary.interface";

const createPhotoGelary = catchAsync(async (req: Request, res: Response) => {
  const photoGelaryData = req.body;
  const result = await PhotoGelaryService.createPhotoGelary(photoGelaryData);
  sendResponse<IPhotoGelary>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "PhotoGelary created successfully!",
    data: result,
  });
});

const getAllPhotoGelary = catchAsync(async (req: Request, res: Response) => {
  const result = await PhotoGelaryService.getAllPhotoGelary();

  sendResponse<IPhotoGelary[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "PhotoGelary fetched successfully!",
    data: result,
  });
});

const getPhotoGelaryById = catchAsync(async (req: Request, res: Response) => {
  const result = await PhotoGelaryService.getPhotoGelaryById(req.params.id);

  sendResponse<IPhotoGelary>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "PhotoGelary fetched successfully!",
    data: result,
  });
});

const updatePhotoGelary = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await PhotoGelaryService.updatePhotoGelaryById(
    id,
    updatedData
  );

  sendResponse<IPhotoGelary>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "PhotoGelary updated successfully!",
    data: result,
  });
});

const deletePhotoGelary = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PhotoGelaryService.deletePhotoGelaryById(id);
  sendResponse<IPhotoGelary>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "PhotoGelary deleted successfully!",
    data: result,
  });
});

const getPhotoGelaryByAlbum = catchAsync(
  async (req: Request, res: Response) => {
    const { album } = req?.params;
    const albumObject: IPhotoGelary = {
      album,
      title: "",
      image: "",
    };
    const result = await PhotoGelaryService.getPhotoGelaryByAlbum(albumObject);

    sendResponse<IPhotoGelary[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "PhotoGelary fetched successfully!",
      data: result,
    });
  }
);

const createAlbum = catchAsync(async (req: Request, res: Response) => {
  const albumData = req.body;
  const result = await PhotoGelaryService.createAlbum(albumData);
  sendResponse<IAlbum>(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Album created successfully!",
    data: result,
  });
});

const getAllAlbum = catchAsync(async (req: Request, res: Response) => {
  const result = await PhotoGelaryService.getAllAlbum();

  sendResponse<IAlbum[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Album fetched successfully!",
    data: result,
  });
});

const deleteAlbum = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await PhotoGelaryService.deleteAlbumById(id);
  sendResponse<IAlbum>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Album deleted successfully!",
    data: result,
  });
});

export const PhotoGelaryController = {
  getAllPhotoGelary,
  getPhotoGelaryById,
  updatePhotoGelary,
  deletePhotoGelary,
  createPhotoGelary,

  getPhotoGelaryByAlbum,
  createAlbum,
  getAllAlbum,
  deleteAlbum,
};
