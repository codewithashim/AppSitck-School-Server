import { Schema, model } from "mongoose";
import {
  IStudentPortal,
  StudentPortalModel,
} from "./studentPortal.interface";


const StudentPortalSchema = new Schema<IStudentPortal>(
  {
    title: {
      type: String,
    },
    shift: {
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

export const StudentPortal = model<IStudentPortal, StudentPortalModel>(
  "StudentPortal",
  StudentPortalSchema
);
