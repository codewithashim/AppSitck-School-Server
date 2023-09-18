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
      ref: "Album",
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
    albumProfile: {
      type: String,
    },
    photos: [
      {
        type: Schema.Types.ObjectId,
        ref: "PhotoGelary",
      },
    ],
    totalPhotos: {
      type: Number,
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
