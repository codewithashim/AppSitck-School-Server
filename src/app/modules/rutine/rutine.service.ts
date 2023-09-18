import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IRutine } from "./rutine.interface";
import { Rutine } from "./rutine.model";
import { StudentPortal } from "../studentPortal/studentPortal.modal";
import { Types } from "mongoose";


const createRutine = async (payload: IRutine): Promise<IRutine | null> => {
  try {
    const rutine = await Rutine.create(payload);

    const selectedStudentPortalClassId = payload.class.toString(); 
    const selectedStudentPortalClass = await StudentPortal.findById(selectedStudentPortalClassId);

    if (selectedStudentPortalClass) {
      if (Array.isArray(selectedStudentPortalClass?.rutine)) {
        (selectedStudentPortalClass?.rutine as Types.ObjectId[]).push(rutine?._id);
        selectedStudentPortalClass.save();
      }
    }
    
    return rutine;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};



const getAllRutine = async (): Promise<Array<IRutine>> => {
  try {
    const Rutines = await Rutine.find();
    return Rutines;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getRutineById = async (id: string): Promise<IRutine | null> => {
  try {
    const rutine = await Rutine.findOne({ _id: id });
    if (!rutine) {
      throw new ApiError(httpStatus.NOT_FOUND, "Rutine not found");
    }
    return rutine;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getRutinesByClass = async (classes: string): Promise<Array<IRutine>> => {
  try {
    const rutines = await Rutine.find({ class: classes });
    if (!rutines) {
      throw new ApiError(httpStatus.NOT_FOUND, "Rutine not found");
    }
    return rutines;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
}

const updateRutineById = async (
  id: string,
  payload: IRutine
): Promise<IRutine | null> => {
  try {
    const rutine = await Rutine.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return rutine;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteRutineById = async (id: string): Promise<IRutine | null> => {
  try {
    const rutine = await Rutine.findByIdAndDelete(id);
    return rutine;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const RutineService = {
  createRutine,
  getAllRutine,
  getRutineById,
  updateRutineById,
  deleteRutineById,
  getRutinesByClass
};
