import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { StudentPortal } from "../studentPortal/studentPortal.modal";
import { IResult } from "./result.interface";
import { Result } from "./result.model";
import { Types } from "mongoose";

const createResult = async (payload: IResult): Promise<IResult | null> => {
  try {
    const result = await Result.create(payload);
    const selectedStudentPortalClassId = payload.class.toString(); 
    const selectedStudentPortalClass = await StudentPortal.findById(selectedStudentPortalClassId);

    if (selectedStudentPortalClass) {
      if (Array.isArray(selectedStudentPortalClass.result)) {
        (selectedStudentPortalClass.result as Types.ObjectId[]).push(result?._id);
        selectedStudentPortalClass.save();
      }
    }
    
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllResult = async (): Promise<Array<IResult>> => {
  try {
    const results = await Result.find();
    return results;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getResultById = async (id: string): Promise<IResult | null> => {
  try {
    const result = await Result.findOne({ _id: id });
    if (!result) {
      throw new ApiError(httpStatus.NOT_FOUND, "Result not found");
    }
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getResultsByClass = async (classes: string): Promise<Array<IResult>> => {
  try {
    const results = await Result.find({ class: classes });
    return results;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateResultById = async (
  id: string,
  payload: IResult
): Promise<IResult | null> => {
  try {
    const result = await Result.findOneAndUpdate(
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

const deleteResultById = async (id: string): Promise<IResult | null> => {
  try {
    const result = await Result.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const ResultService = {
  createResult,
  getAllResult,
  getResultById,
  updateResultById,
  deleteResultById,
  getResultsByClass,
};
