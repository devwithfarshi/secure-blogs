const { Posts, Users } = require("./models");
import "colors";
import { connectToDb } from "./connectToDb";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Posts.find();
    return posts;
  } catch (error) {
    console.log("get all post error".bgRed.underline);
    console.log({ error });
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Posts.findOne({ slug });
    return post;
  } catch (error) {
    console.log("get single post error".bgRed.underline);
    console.log({ error });
  }
};
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await Users.findById(id);
    return user;
  } catch (error) {
    console.log("get single user error".bgRed.underline);
    console.log({ error });
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await Users.find();
    return users;
  } catch (error) {
    console.log("get all user error".bgRed.underline);
    console.log({ error });
  }
};
