import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { ITeacher } from "./teacher.interface";
import { Teacher } from "./teacher.model";

const createTeacher = async (payload: ITeacher): Promise<ITeacher | null> => {
  try {
    const teacher = await Teacher.create(payload);
    return teacher;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllTeacher = async (): Promise<Array<ITeacher>> => {
  try {
    const teachers = await Teacher.find();
    if (!teachers) {
      throw new ApiError(httpStatus.NOT_FOUND, "Teacher not found");
    }

    return teachers;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getTeacherById = async (id: string): Promise<ITeacher | null> => {
  try {
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      throw new ApiError(httpStatus.NOT_FOUND, "Teacher not found");
    }
    return teacher;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateTeacherById = async (
  id: string,
  payload: ITeacher
): Promise<ITeacher | null> => {
  try {
    const teacher = await Teacher.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return teacher;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteTeacherById = async (id: string): Promise<ITeacher | null> => {
  try {
    const teacher = await Teacher.findByIdAndDelete(id);
    return teacher;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const TeacherService = {
  createTeacher,
  getAllTeacher,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById,
};
