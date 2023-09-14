import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IFooter, ILink } from "./footer.interface";
import { Footer, Link } from "./footer.model";

const createFooter = async (payload: IFooter): Promise<IFooter | null> => {
  try {
    const footer = new Footer({ ...payload });
    await footer.save();
    return footer;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllFooter = async (): Promise<Array<IFooter>> => {
  try {
    const footers = await Footer.find();
    if (!footers) {
      throw new ApiError(httpStatus.NOT_FOUND, "Footer not found");
    }
    return footers;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getFooterById = async (id: string): Promise<IFooter | null> => {
  try {
    const footer = await Footer.findById(id);
    if (!footer) {
      throw new ApiError(httpStatus.NOT_FOUND, "Footer not found");
    }

    return footer;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateFooterById = async (
  id: string,
  payload: IFooter
): Promise<IFooter | null> => {
  try {
    const result = await Footer.findOneAndUpdate(
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

const deleteFooterById = async (id: string): Promise<IFooter | null> => {
  try {
    const footer = await Footer.findByIdAndDelete(id);
    return footer;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const createLink = async (payload: ILink): Promise<ILink | null> => {
  try {
    const link = new Link({ ...payload });
    await link.save();
    return link;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllLink = async (): Promise<Array<ILink>> => {
  try {
    const links = await Link.find();
    if (!links) {
      throw new ApiError(httpStatus.NOT_FOUND, "Link not found");
    }
    return links;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getLinkById = async (id: string): Promise<ILink | null> => {
  try {
    const link = await Link.findById(id);
    if (!link) {
      throw new ApiError(httpStatus.NOT_FOUND, "Link not found");
    }

    return link;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateLinkById = async (
  id: string,
  payload: ILink
): Promise<ILink | null> => {
  try {
    const result = await Link.findOneAndUpdate(
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

const deleteLinkById = async (id: string): Promise<ILink | null> => {
  try {
    const link = await Link.findByIdAndDelete(id);
    return link;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const FooterService = {
  createFooter,
  getAllFooter,
  getFooterById,
  updateFooterById,
  deleteFooterById,

  createLink,
  getAllLink,
  getLinkById,
  updateLinkById,
  deleteLinkById,
};
