import { Schema, model } from "mongoose";
import { TeacherModel, ITeacher } from "./teacher.interface";

const TeacherSchema = new Schema<ITeacher>(
  {
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    image: {
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

export const Teacher = model<ITeacher, TeacherModel>("Teacher", TeacherSchema);
