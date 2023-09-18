import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IAlbum, IPhotoGelary } from "./photoGelary.interface";
import { Album, PhotoGelary } from "./photoGelary.model";

const createAlbum = async (payload: IAlbum): Promise<IAlbum> => {
  try {
    const album = await Album.create(payload);
    return album;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllAlbum = async (): Promise<Array<IAlbum>> => {
  try {
    const albums = await Album.find().populate("photos");

    if(!albums) {
      throw new ApiError(httpStatus.NOT_FOUND, "Album not found");
    }

    return albums;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error");
  }
};

const getAlbumById = async (id: string): Promise<IAlbum | null> => {
  try {
    const album = await Album.findById(id).populate("photos");
    if (!album) {
      throw new ApiError(httpStatus.NOT_FOUND, "Album not found");
    }

    return album;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error");
  }
};

const deleteAlbumById = async (id: string): Promise<IAlbum | null> => {
  try {
    const album = await Album.findByIdAndDelete(id);
    return album;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

// const createPhotoGelary = async (
//   payload: IPhotoGelary
// ): Promise<IPhotoGelary | null> => {
//   try {
//     const photoGelary = await PhotoGelary.create(payload);
//     return photoGelary;
//   } catch (error) {
//     throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
//   }
// };

const createPhotoGelary = async (payload: IPhotoGelary): Promise<IPhotoGelary | null> => {
  try {
    // Step 1: Create the PhotoGelary entry
    const photoGelary = await PhotoGelary.create(payload);

    // Step 2: Find the selected album by its _id
    const selectedAlbumId = payload.album.toString(); // Convert ObjectId to string
    const selectedAlbum = await Album.findById(selectedAlbumId);

    if (selectedAlbum) {
      // Step 3: Push the newly created PhotoGelary _id into the photos array of the selected album
      selectedAlbum.photos.push(photoGelary?._id);

      // Step 4: Increment the totalPhotos field of the selected album
      selectedAlbum.totalPhotos = (selectedAlbum.totalPhotos || 0) + 1;

      // Step 5: Save the changes to the selected album
      await selectedAlbum.save();
    }

    return photoGelary;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};


const getAllPhotoGelary = async (): Promise<Array<IPhotoGelary>> => {
  try {
    const PhotoGelarys = await PhotoGelary.find().populate({
      path: 'album',
      model: 'Album',
    });

    if (!PhotoGelarys) {
      throw new ApiError(httpStatus.NOT_FOUND, "PhotoGelary not found");
    }

    return PhotoGelarys;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error");
  }
};


const getPhotoGelaryById = async (id: string): Promise<IPhotoGelary | null> => {
  try {
    const photoGelary = await PhotoGelary.findById(id).populate("album");

    if (!photoGelary) {
      throw new ApiError(httpStatus.NOT_FOUND, "PhotoGelary not found");
    }

    return photoGelary;
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error");
  }
};

const getPhotoGelaryByAlbum = async (
  album: IPhotoGelary
): Promise<IPhotoGelary[] | null> => {
  try {
    const photoGelary = await PhotoGelary.find({ album });
    return photoGelary;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updatePhotoGelaryById = async (
  id: string,
  payload: IPhotoGelary
): Promise<IPhotoGelary | null> => {
  try {
    const result = await PhotoGelary.findOneAndUpdate(
      { _id: id },
      { ...payload },
      {
        new: true,
      }
    );
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const deletePhotoGelaryById = async (
  id: string
): Promise<IPhotoGelary | null> => {
  try {
    const photoGelary = await PhotoGelary.findByIdAndDelete(id);
    return photoGelary;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};


const deletePhotoFromAlbumAndPhotoGelary = async (photoId: string): Promise<void> => {
  try {
    // Step 1: Find the PhotoGelary document by its _id
    const photoGelary = await PhotoGelary.findById(photoId);

    if (!photoGelary) {
      throw new ApiError(httpStatus.NOT_FOUND, "PhotoGelary not found");
    }

    // Step 2: Find the corresponding Album document
    const albumId = photoGelary.album.toString(); // Convert ObjectId to string
    const album = await Album.findById(albumId);

    if (!album) {
      throw new ApiError(httpStatus.NOT_FOUND, "Album not found");
    }

    // Step 3: Remove the photoId from the photos array of the Album
    album.photos = album.photos.filter((photo) => photo.toString() !== photoId);

    // Step 4: Decrement the totalPhotos count of the Album by 1
    album.totalPhotos = (album.totalPhotos || 0) - 1;

    // Step 5: Delete the PhotoGelary document using deleteOne
    await PhotoGelary.deleteOne({ _id: photoId });

    // Save the changes to the Album
    await album.save();
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Internal server error");
  }
};



export const PhotoGelaryService = {
  createPhotoGelary,
  getAllPhotoGelary,
  getPhotoGelaryById,
  updatePhotoGelaryById,
  deletePhotoGelaryById,
  getAlbumById,
  
  deletePhotoFromAlbumAndPhotoGelary,
  getPhotoGelaryByAlbum,
  createAlbum,
  getAllAlbum,
  deleteAlbumById,
};
