import { Schema, model, models } from "mongoose";
import threadsModel from "./thread";

interface IUser {
  username: string;
  password: string;
  email: string;
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

schema.virtual("threads", {
  localField: "_id",
  foreignField: "user",
  ref: "thread",
});

const usersModel = models.user || model<IUser>("user", schema);

export default usersModel;
