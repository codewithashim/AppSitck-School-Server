import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IStudentPortal } from "./studentPortal.interface";
import { StudentPortal } from "./studentPortal.modal";

const createStudentPortal = async (payload: IStudentPortal): Promise<IStudentPortal | null> => {
  try {
    const studentPortal = await StudentPortal.create(payload);
    return studentPortal;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllStudentPortal = async (): Promise<Array<IStudentPortal>> => {
  try {
    const StudentPortals = await StudentPortal.find();
    return StudentPortals;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getStudentPortalById = async (id: string): Promise<IStudentPortal | null> => {
  try {
    const studentPortal = await StudentPortal.findOne({ _id: id })
    if (!studentPortal) {
      throw new ApiError(httpStatus.NOT_FOUND, "StudentPortal not found");
    }
    return studentPortal;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateStudentPortalById = async (
  id: string,
  payload: IStudentPortal
): Promise<IStudentPortal | null> => {
  try {
    const studentPortal = await StudentPortal.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return studentPortal;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteStudentPortalById = async (id: string): Promise<IStudentPortal | null> => {
  try {
    const studentPortal = await StudentPortal.findByIdAndDelete(id);
    return studentPortal;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const StudentPortalService = {
  createStudentPortal,
  getAllStudentPortal,
  getStudentPortalById,
  updateStudentPortalById,
  deleteStudentPortalById,
};
