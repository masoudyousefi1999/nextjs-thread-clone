import mongoose ,{ Schema, model, models } from "mongoose";
import usersModel from "./user";

// interface IThread {
//   thread: string;
//   user: mongoose.Types.ObjectId;
// }

const schema = new Schema(
  {
    thread: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      required : true,
      ref: "user",
    }
  },
  {
    timestamps: true,
  }
);

const threadsModel = models.thread || model("thread", schema);

export default threadsModel;
