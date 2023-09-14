import { Model } from "mongoose";
import { type } from "os";

export type ILink = {
  title: string;
  url: string;
};

export type IFooter = {
  schoolName: string;
  schoolDetail: string;
  latitude: string;
  longitude: string;
  schoolAddress: string;
  email: string;
  phone: string;
  facebook: string;
  youtube: string;
  twitter: string;
  instagram: string;
  linkedin : string;
};


export type LinkModal = Model<ILink, Record<string, unknown>>;

export type FooterModel = Model<IFooter, Record<string, unknown>>;
