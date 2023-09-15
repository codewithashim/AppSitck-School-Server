import { Schema, model } from "mongoose";
import {
  TeacherModel,
  ITeacher,
  IMessage,
  MessageModal,
} from "./teacher.interface";

const MessageSchema = new Schema<IMessage>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const TeacherSchema = new Schema<ITeacher>(
  {
    name: {
      type: String,
    },
    detail: {
      type: String,
    },
    joiningDate: {
      type: String,
    },
    indexNo: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    qualification: {
      type: String,
    },
    position: {
      type: String,
    },
    image: {
      type: String,
    },
    presentAddress: {
      type: String,
    },
    permanentAddress: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Message = model<IMessage, MessageModal>("Message", MessageSchema);

export const Teacher = model<ITeacher, TeacherModel>("Teacher", TeacherSchema);
