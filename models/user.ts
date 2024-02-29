import mongoose, { Schema, VirtualType, model, models } from "mongoose";
import threadsModel, { IThread } from "./thread";

export interface IUser{
  _id? : string
  username: string;
  password: string;
  email: string;
  userThreads?: IThread[];
}
const schema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual("userThreads",{
  ref: "thread",
  localField: "_id",
  foreignField: "user",
});



const usersModel = models.user || model<IUser>("user", schema);

export default usersModel;
