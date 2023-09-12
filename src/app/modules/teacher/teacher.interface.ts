import { Model } from "mongoose";

export type ITeacher = {
  name: string;
  position: string;
  detail: string;
  joiningDate: string;
  image: string;
};

export type TeacherModel = Model<ITeacher, Record<string, unknown>>;
