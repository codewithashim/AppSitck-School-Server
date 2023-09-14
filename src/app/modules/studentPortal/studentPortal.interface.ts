import { Model } from "mongoose";

export type IClass = {
  title: string;
  shift?: string;
};

export type IStudentPortal = {
  title: string;
  shift?: string;
};

export type ClassModel = Model<IClass, Record<string, unknown>>;

export type StudentPortalModel = Model<IStudentPortal, Record<string, unknown>>;
