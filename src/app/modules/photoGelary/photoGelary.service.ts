import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IAlbum, IPhotoGelary } from "./photoGelary.interface";
import { Album, PhotoGelary } from "./photoGelary.model";

const createAlbum = async (payload: IAlbum): Promise<IAlbum> => {
  try {
    const album = await Album.create(payload);
    return album;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllAlbum = async (): Promise<Array<IAlbum>> => {
  try {
    const albums = await Album.find();
    return albums;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteAlbumById = async (id: string): Promise<IAlbum | null> => {
  try {
    const album = await Album.findByIdAndDelete(id);
    return album;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const createPhotoGelary = async (
  payload: IPhotoGelary
): Promise<IPhotoGelary | null> => {
  try {
    const photoGelary = await PhotoGelary.create(payload);
    return photoGelary;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllPhotoGelary = async (): Promise<Array<IPhotoGelary>> => {
  try {
    const PhotoGelarys = await PhotoGelary.find();
    return PhotoGelarys;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getPhotoGelaryById = async (id: string): Promise<IPhotoGelary | null> => {
  try {
    const photoGelary = await PhotoGelary.findById(id);
    return photoGelary;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getPhotoGelaryByAlbum = async (
  album: IPhotoGelary
): Promise<IPhotoGelary[] | null> => {
  try {
    const photoGelary = await PhotoGelary.find({ album });
    return photoGelary;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updatePhotoGelaryById = async (
  id: string,
  payload: IPhotoGelary
): Promise<IPhotoGelary | null> => {
  try {
    const result = await PhotoGelary.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deletePhotoGelaryById = async (
  id: string
): Promise<IPhotoGelary | null> => {
  try {
    const photoGelary = await PhotoGelary.findByIdAndDelete(id);
    return photoGelary;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const PhotoGelaryService = {
  createPhotoGelary,
  getAllPhotoGelary,
  getPhotoGelaryById,
  updatePhotoGelaryById,
  deletePhotoGelaryById,
  
  getPhotoGelaryByAlbum,
  createAlbum,
  getAllAlbum,
  deleteAlbumById,
};
