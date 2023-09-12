import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IHomeSlider } from "./homeslider.interface";
import { HomeSlider } from "./homeslider.model";

const createHomeSlider = async (payload: IHomeSlider): Promise<IHomeSlider | null> => {
  try {
    const homeSlider = new HomeSlider(payload);
    const result = await homeSlider.save();
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllHomeSlider = async (): Promise<Array<IHomeSlider>> => {
  try {
    const HomeSliders = await HomeSlider.find();
    return HomeSliders;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getHomeSliderById = async (id: string): Promise<IHomeSlider | null> => {
  try {
    const homeSlider = await HomeSlider.findById(id);
    return homeSlider;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateHomeSliderById = async (
  id: string,
  payload: IHomeSlider
): Promise<IHomeSlider | null> => {
  try {
    const result = await HomeSlider.findOneAndUpdate(
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

const deleteHomeSliderById = async (id: string): Promise<IHomeSlider | null> => {
  try {
    const homeSlider = await HomeSlider.findByIdAndDelete(id);
    return homeSlider;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const HomeSliderService = {
  createHomeSlider,
  getAllHomeSlider,
  getHomeSliderById,
  updateHomeSliderById,
  deleteHomeSliderById,
};
