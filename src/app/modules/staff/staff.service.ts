import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IStaff } from "./staff.interface";
import { Staff } from "./staff.model";

const createStaff = async (payload: IStaff): Promise<IStaff | null> => {
  try {
    const staff = await Staff.create(payload);
    return staff;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllStaff = async (): Promise<Array<IStaff>> => {
  try {
    const Staffs = await Staff.find();
    return Staffs;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getStaffById = async (id: string): Promise<IStaff | null> => {
  try {
    const staff = await Staff.findById(id);
    if (!staff) {
      throw new ApiError(httpStatus.NOT_FOUND, "Staff not found");
    }

    return staff;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateStaffById = async (
  id: string,
  payload: IStaff
): Promise<IStaff | null> => {
  try {
    const staff = await Staff.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return staff;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteStaffById = async (id: string): Promise<IStaff | null> => {
  try {
    const staff = await Staff.findByIdAndDelete(id);
    return staff;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const StaffService = {
  createStaff,
  getAllStaff,
  getStaffById,
  updateStaffById,
  deleteStaffById,
};
