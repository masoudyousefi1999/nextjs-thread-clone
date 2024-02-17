import { Schema, model, models, Types } from "mongoose";
import usersModel from "./user";

interface IThread {
  thread: string;
  user: Types.ObjectId;
}

const schema = new Schema<IThread>(
  {
    thread: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required : true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const threadsModel = models.thread || model<IThread>("thread", schema);

export default threadsModel;
