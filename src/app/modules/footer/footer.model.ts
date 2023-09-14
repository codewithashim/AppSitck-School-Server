import { Schema, model } from "mongoose";
import { FooterModel, IFooter, ILink, LinkModal } from "./footer.interface";

const FooterSchema = new Schema<IFooter>(
  {
    schoolName: {
      type: String,
    },
    schoolAddress: {
      type: String,
    },
    schoolDetail: {
      type: String,
    },
    email: {
      type: String,
    },
    phone:{
      type: String,
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    youtube: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedin: {
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

const LinkSchema = new Schema<ILink>(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const Link = model<ILink, LinkModal>("Link", LinkSchema);


export const Footer = model<IFooter, FooterModel>("Footer", FooterSchema);
