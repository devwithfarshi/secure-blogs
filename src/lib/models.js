import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profile: {
      type: String,
    },
    role: {
      type: Boolean,
      default: "user",
      // administrative , user
    },
  },
  { timestamps: true }
);
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Users =
  mongoose.models.Users || mongoose.model("Users", userSchema);
export const Posts =
  mongoose.models.Posts || mongoose.model("Posts", postSchema);
