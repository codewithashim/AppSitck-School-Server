import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { ICommittee } from "./committee.interface";
import { Committee } from "./committee.model";

const createCommittee = async (payload: ICommittee): Promise<ICommittee | null> => {
  try {
    const committee = await Committee.create(payload);
    return committee;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllCommittee = async (): Promise<Array<ICommittee>> => {
  try {
    const Committees = await Committee.find();
    if (!Committees) {
      throw new ApiError(httpStatus.NOT_FOUND, "Committee not found");
    }

    return Committees;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getCommitteeById = async (id: string): Promise<ICommittee | null> => {
  try {
    const committee = await Committee.findById(id);
    if (!committee) {
      throw new ApiError(httpStatus.NOT_FOUND, "Committee not found");
    }

    return committee;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateCommitteeById = async (
  id: string,
  payload: ICommittee
): Promise<ICommittee | null> => {
  try {
    const committee = await Committee.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return committee;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteCommitteeById = async (id: string): Promise<ICommittee | null> => {
  try {
    const committee = await Committee.findByIdAndDelete(id);
    return committee;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const CommitteeService = {
  createCommittee,
  getAllCommittee,
  getCommitteeById,
  updateCommitteeById,
  deleteCommitteeById,
};
