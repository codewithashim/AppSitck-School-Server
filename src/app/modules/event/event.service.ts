import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IEvent } from "./event.interface";
import { Event } from "./event.model";

const createEvent = async (payload: IEvent): Promise<IEvent | null> => {
  try {
    const event = await Event.create(payload);
    return event;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllEvent = async (): Promise<Array<IEvent>> => {
  try {
    const events = await Event.find();
    if (!events) {
      throw new ApiError(httpStatus.NOT_FOUND, "Event not found");
    }

    return events;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getEventById = async (id: string): Promise<IEvent | null> => {
  try {
    const event = await Event.findById(id);
    if (!event) {
      throw new ApiError(httpStatus.NOT_FOUND, "Event not found");
    }
    return event;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateEventById = async (
  id: string,
  payload: IEvent
): Promise<IEvent | null> => {
  try {
    const result = await Event.findOneAndUpdate(
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

const deleteEventById = async (id: string): Promise<IEvent | null> => {
  try {
    const event = await Event.findByIdAndDelete(id);
    return event;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const EventService = {
  createEvent,
  getAllEvent,
  getEventById,
  updateEventById,
  deleteEventById,
};
