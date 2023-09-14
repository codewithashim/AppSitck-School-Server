import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IMessage, ITeacher } from "./teacher.interface";
import { Message, Teacher } from "./teacher.model";

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

const createMessage = async (payload: IMessage): Promise<IMessage | null> => {
  try {
    const message = await Message.create(payload);
    return message;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllMessage = async (): Promise<Array<IMessage>> => {
  try {
    const messages = await Message.find();
    if (!messages) {
      throw new ApiError(httpStatus.NOT_FOUND, "Message not found");
    }

    return messages;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getMessageById = async (id: string): Promise<IMessage | null> => {
  try {
    const message = await Message.findById(id);
    if (!message) {
      throw new ApiError(httpStatus.NOT_FOUND, "Message not found");
    }
    return message;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateMessageById = async (
  id: string,
  payload: IMessage
): Promise<IMessage | null> => {
  try {
    const message = await Message.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return message;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deleteMessageById = async (id: string): Promise<IMessage | null> => {
  try {
    const message = await Message.findByIdAndDelete(id);
    return message;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
}



export const TeacherService = {
  createTeacher,
  getAllTeacher,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById,

  createMessage,
  getAllMessage,
  getMessageById,
  updateMessageById,
  deleteMessageById,
  
};
