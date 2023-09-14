import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IOrganizationStatistic, IStatistic } from "./statistic.interface";
import { OrganizationStatistic, Statistic } from "./statistic.modal";

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

const createOrganizationStatistic = async (
  payload: IOrganizationStatistic
): Promise<IOrganizationStatistic | null> => {
  try {
    const statistic = await OrganizationStatistic.create(payload);
    return statistic;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllOrganizationStatistic = async (): Promise<
  Array<IOrganizationStatistic>
> => {
  try {
    const statistics = await OrganizationStatistic.find();
    return statistics;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getOrganizationStatisticById = async (
  id: string
): Promise<IOrganizationStatistic | null> => {
  try {
    const statistic = await OrganizationStatistic.findById(id);
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

const updateOrganizationStatisticById = async (
  id: string,
  payload: IOrganizationStatistic
): Promise<IOrganizationStatistic | null> => {
  try {
    const statistic = await OrganizationStatistic.findOneAndUpdate(
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

const deleteOrganizationStatisticById = async (
  id: string
): Promise<IOrganizationStatistic | null> => {
  try {
    const statistic = await OrganizationStatistic.findByIdAndDelete(id);
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
  createOrganizationStatistic,
  getAllOrganizationStatistic,
  getOrganizationStatisticById,
  updateOrganizationStatisticById,
  deleteOrganizationStatisticById,
  
};
