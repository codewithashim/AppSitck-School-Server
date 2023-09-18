import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { ISylebus } from "./sylebus.interface";
import { Sylebus } from "./sylebus.model";
import { StudentPortal } from "../studentPortal/studentPortal.modal";
import { Types } from "mongoose";

const createSylebus = async (payload: ISylebus): Promise<ISylebus | null> => {
  try {
    const sylebus = await Sylebus.create(payload);

    const selectedStudentPortalClassId = payload.class.toString(); 
    const selectedStudentPortalClass = await StudentPortal.findById(selectedStudentPortalClassId);

    if (selectedStudentPortalClass) {
      if (Array.isArray(selectedStudentPortalClass?.sylebus)) {
        (selectedStudentPortalClass?.sylebus as Types.ObjectId[]).push(sylebus?._id);
        selectedStudentPortalClass.save();
      }
    }

    return sylebus;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllSylebus = async (): Promise<Array<ISylebus>> => {
  try {
    const sylebus = await Sylebus.find();
    return sylebus;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getSylebusById = async (id: string): Promise<ISylebus | null> => {
  try {
    const sylebus = await Sylebus.findOne({ _id: id });
    if (!sylebus) {
      throw new ApiError(httpStatus.NOT_FOUND, "Sylebus not found");
    }
    return sylebus;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getSylebussByClass = async (classes: string): Promise<Array<ISylebus>> => {
  try {
    const sylebus = await Sylebus.find({ class: classes });
    if (!sylebus) {
      throw new ApiError(httpStatus.NOT_FOUND, "Sylebus not found");
    }
    return sylebus;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateSylebusById = async (
  id: string,
  payload: ISylebus
): Promise<ISylebus | null> => {
  try {
    const sylebus = await Sylebus.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return sylebus;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteSylebusById = async (id: string): Promise<ISylebus | null> => {
  try {
    const sylebus = await Sylebus.findByIdAndDelete(id);
    return sylebus;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const SylebusService = {
  createSylebus,
  getAllSylebus,
  getSylebusById,
  updateSylebusById,
  deleteSylebusById,
  getSylebussByClass,
};
