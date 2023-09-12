import { Model } from "mongoose";

export type IContact = {
  address: string;
  email: string;
  phone: string;
};

export type ContactModel = Model<IContact, Record<string, unknown>>;
