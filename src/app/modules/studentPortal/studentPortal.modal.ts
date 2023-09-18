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
    rutine: [
      {
        type: Schema.Types.ObjectId,
        ref: "Rutine",
      },
    ],
    result: [
      {
        type: Schema.Types.ObjectId,
        ref: "Result",
      },
    ],
    sylebus: [
      {
        type: Schema.Types.ObjectId,
        ref: "Sylebus",
      },
    ],
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
