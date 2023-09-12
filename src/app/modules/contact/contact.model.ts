import { Schema, model } from "mongoose";
import { ContactModel, IContact } from "./contact.interface";

const ContactSchema = new Schema<IContact>(
  {
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
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

export const Contact = model<IContact, ContactModel>("Contact", ContactSchema);
