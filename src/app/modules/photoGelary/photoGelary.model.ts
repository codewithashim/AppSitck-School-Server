import { Schema, model } from "mongoose";
import {
  PhotoGelaryModel,
  IPhotoGelary,
  IAlbum,
  AlbumModel,
} from "./photoGelary.interface";

const PhotoGelarySchema = new Schema<IPhotoGelary>(
  {
    title: {
      type: String,
    },
    album: {
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

const AlbumSchema = new Schema<IAlbum>(
  {
    title: {
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

export const Album = model<IAlbum, AlbumModel>("Album", AlbumSchema);

export const PhotoGelary = model<IPhotoGelary, PhotoGelaryModel>(
  "PhotoGelary",
  PhotoGelarySchema
);
