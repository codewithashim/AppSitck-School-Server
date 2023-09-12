import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IStatistic } from "./statistic.interface";
import { Statistic } from "./statistic.modal";

const createStatistic = async (
  payload: IStatistic
): Promise<IStatistic | null> => {
  try {
    const statistic = await Statistic.create(payload);
    return statistic;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllStatistic = async (): Promise<Array<IStatistic>> => {
  try {
    const statistics = await Statistic.find();
    return statistics;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getStatisticById = async (id: string): Promise<IStatistic | null> => {
  try {
    const statistic = await Statistic.findById(id);
    if (!statistic) {
      throw new ApiError(httpStatus.NOT_FOUND, "Statistic not found");
    }
    return statistic;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateStatisticById = async (
  id: string,
  payload: IStatistic
): Promise<IStatistic | null> => {
  try {
    const statistic = await Statistic.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return statistic;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteStatisticById = async (id: string): Promise<IStatistic | null> => {
  try {
    const statistic = await Statistic.findByIdAndDelete(id);
    return statistic;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const StatisticService = {
  createStatistic,
  getAllStatistic,
  getStatisticById,
  updateStatisticById,
  deleteStatisticById,
};
