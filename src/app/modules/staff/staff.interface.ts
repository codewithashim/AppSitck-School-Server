import { Model } from "mongoose";

export type IStaff = {
  name: string;
  position: string;
  detail: string;
  joiningDate: string;
  image: string;
};

export type StaffModel = Model<IStaff, Record<string, unknown>>;
