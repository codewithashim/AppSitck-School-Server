import { Model } from "mongoose";

export type IPhotoGelary = {
  title: string;
  album: string;
  image: string;
};

export type IAlbum = {
  title: string;
};

export type AlbumModel = Model<IAlbum, Record<string, unknown>>;

export type PhotoGelaryModel = Model<IPhotoGelary, Record<string, unknown>>;
