import { Model } from "mongoose";

export type ICommittee = {
  name: string;
  position: string;
  detail: string;
  image: string;
};

export type CommitteeModel = Model<ICommittee, Record<string, unknown>>;
