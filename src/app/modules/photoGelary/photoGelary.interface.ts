import { Model } from "mongoose";

export type IPhotoGelary = {
  _id: any;
  title: string;
  album: IAlbum | string; // Change to IAlbum or string
  image: string;
};

export type IAlbum = {
  _id: any;
  title: string;
  albumProfile: string;
  photos: string[];
  totalPhotos: number; 
  
};


export type AlbumModel = Model<IAlbum, Record<string, unknown>>;

export type PhotoGelaryModel = Model<IPhotoGelary, Record<string, unknown>>;
