import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { IContact } from "./contact.interface";
import { Contact } from "./contact.model";

const createContact = async (payload: IContact): Promise<IContact | null> => {
  try {
    const contact = await Contact.create(payload);
    return contact;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Bad request");
  }
};

const getAllContact = async (): Promise<Array<IContact>> => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      throw new ApiError(httpStatus.NOT_FOUND, "Contact not found");
    }

    return contacts;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const getContactById = async (id: string): Promise<IContact | null> => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      throw new ApiError(httpStatus.NOT_FOUND, "Contact not found");
    }
    return contact;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

const updateContactById = async (
  id: string,
  payload: IContact
): Promise<IContact | null> => {
  try {
    const result = await Contact.findOneAndUpdate(
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

const deleteContactById = async (id: string): Promise<IContact | null> => {
  try {
    const contact = await Contact.findByIdAndDelete(id);
    return contact;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
};

export const ContactService = {
  createContact,
  getAllContact,
  getContactById,
  updateContactById,
  deleteContactById,
};
