import { Model } from "mongoose";
import { type } from "os";

export type IMessage = {
  name: string;
  image: string;
  position: string;
  message: string;
};

export type ITeacher = {
  name: string;
  position: string;
  subject: string;
  detail: string;
  joiningDate: string;
  indexNo: string;
  email: string;
  phone: string;
  qualification: string;
  presentAddress: string;
  permanentAddress: string;
  image: string;
};

export type MessageModal = Model<IMessage, Record<string, unknown>>;

export type TeacherModel = Model<ITeacher, Record<string, unknown>>;
