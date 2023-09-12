import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { INotice } from "./notice.interface";
import { Notice } from "./notice.model";

const createNotice = async (payload: INotice): Promise<INotice | null> => {
  try {
    const notice = await Notice.create(payload);
    return notice;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllNotice = async (): Promise<Array<INotice>> => {
  try {
    const notices = await Notice.find();
    return notices;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getNoticeById = async (id: string): Promise<INotice | null> => {
  try {
    const notice = await Notice.findById(id);
    if (!notice) {
      throw new ApiError(httpStatus.NOT_FOUND, "Notice not found");
    }

    return notice;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateNoticeById = async (
  id: string,
  payload: INotice
): Promise<INotice | null> => {
  try {
    const result = await Notice.findOneAndUpdate(
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

const deleteNoticeById = async (id: string): Promise<INotice | null> => {
  try {
    const notice = await Notice.findByIdAndDelete(id);
    return notice;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const NoticeService = {
  createNotice,
  getAllNotice,
  getNoticeById,
  updateNoticeById,
  deleteNoticeById,
};
