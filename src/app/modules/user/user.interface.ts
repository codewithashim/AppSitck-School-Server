import { Model } from "mongoose";
import { ENUM_USER_ROLE } from "../../../enums/user";

export type username = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type IUser = {
  email: string;
  role: ENUM_USER_ROLE;
  password: string;
  name: username;
};

export type IUserMethods = {
  isUserExist(email: string): Promise<Partial<IUser> | null>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
};

export type ILoginUserResponse = {
  accessToken?: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};


export type ILoginUser = {
  email: string;
  password: string;
};

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;
