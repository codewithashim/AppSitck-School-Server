import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { ILogo } from "./logo.interface";
import { Logo } from "./logo.modal";

const createLogo = async (payload: ILogo): Promise<ILogo | null> => {
  try {
    const logo = await Logo.create(payload);
    return logo;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllLogo = async (): Promise<Array<ILogo>> => {
  try {
    const logos = await Logo.find();
    return logos;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getLogoById = async (id: string): Promise<ILogo | null> => {
  try {
    const logo = await Logo.findById(id);
    return logo;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateLogoById = async (
  id: string,
  payload: ILogo
): Promise<ILogo | null> => {
  try {
    const result = await Logo.findOneAndUpdate(
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

const deleteLogoById = async (id: string): Promise<ILogo | null> => {
  try {
    const logo = await Logo.findByIdAndDelete(id);
    return logo;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const LogoService = {
  createLogo,
  getAllLogo,
  getLogoById,
  updateLogoById,
  deleteLogoById,
};
