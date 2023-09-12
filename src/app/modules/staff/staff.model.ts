import { Schema, model } from "mongoose";
import { StaffModel, IStaff } from "./staff.interface";

const StaffSchema = new Schema<IStaff>(
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
    position: {
      type: String,
    },
    image: {
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

export const Staff = model<IStaff, StaffModel>("Staff", StaffSchema);
