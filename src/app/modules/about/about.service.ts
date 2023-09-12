import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IAbout } from "./about.interface";
import { About } from "./about.model";

const createAbout = async (payload: IAbout): Promise<IAbout | null> => {
  try {
    const about = await About.create(payload);
    return about;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllAbout = async (): Promise<Array<IAbout>> => {
  try {
    const abouts = await About.find();
    return abouts;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getAboutById = async (id: string): Promise<IAbout | null> => {
  try {
    const about = await About.findById(id);
    return about;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateAboutById = async (
  id: string,
  payload: IAbout
): Promise<IAbout | null> => {
  try {
    const result = await About.findOneAndUpdate(
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

const deleteAboutById = async (id: string): Promise<IAbout | null> => {
  try {
    const about = await About.findByIdAndDelete(id);
    return about;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const AboutService = {
  createAbout,
  getAllAbout,
  getAboutById,
  updateAboutById,
  deleteAboutById,
};
