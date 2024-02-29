import mongoose ,{ Schema, model, models } from "mongoose";
import usersModel from "./user";

export interface IThread {
  _id? : string;
  thread: string;
  user: mongoose.Types.ObjectId;
  createdAt : Date;
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
    }
  },
  {
    timestamps: true,
  }
);

const threadsModel = models.thread || model<IThread>("thread", schema);

export default threadsModel;
