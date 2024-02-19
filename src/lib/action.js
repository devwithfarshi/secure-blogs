import { connectToDb } from "./connectToDb";
import { Posts } from "./models";

export const addPost = async (formData) => {
  "use server";

  const { title, body } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Posts({
      title,
      body,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    });
    await newPost.save();
    console.log("Post Created successfully");
  } catch (error) {
    console.log("🚀 ~ addPost ~ error:", error);
    console.log(`Failed to add post`);
    console.log({ error });
  }
};
