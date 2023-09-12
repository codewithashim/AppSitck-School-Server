import { Schema, model } from "mongoose";
import { CommitteeModel, ICommittee } from "./committee.interface";

const CommitteeSchema = new Schema<ICommittee>(
  {
    name: {
      type: String,
    },
    detail: {
      type: String,
    },
    position: {
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

export const Committee = model<ICommittee, CommitteeModel>("Committee", CommitteeSchema);
