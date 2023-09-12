import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IHeader } from "./header.interface";
import { Header } from "./header.model";

const createHeader = async (payload: IHeader): Promise<IHeader | null> => {
  try {
    const header = new Header({ ...payload });
    await header.save();
    return header;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllHeader = async (): Promise<Array<IHeader>> => {
  try {
    const headers = await Header.find();
    if (!headers) {
      throw new ApiError(httpStatus.NOT_FOUND, "Header not found");
    }
    return headers;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getHeaderById = async (id: string): Promise<IHeader | null> => {
  try {
    const header = await Header.findById(id);
    if (!header) {
      throw new ApiError(httpStatus.NOT_FOUND, "Header not found");
    }

    return header;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateHeaderById = async (
  id: string,
  payload: IHeader
): Promise<IHeader | null> => {
  try {
    const result = await Header.findOneAndUpdate(
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

const deleteHeaderById = async (id: string): Promise<IHeader | null> => {
  try {
    const header = await Header.findByIdAndDelete(id);
    return header;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const HeaderService = {
  createHeader,
  getAllHeader,
  getHeaderById,
  updateHeaderById,
  deleteHeaderById,
};
