import mongoose from "mongoose";
import "colors";
const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log(
      "🚀 ~ connectToDb ~ connection.isConnected:",
      connection.isConnected
    );
  } catch (error) {
    console.log("🚀 ~ connectToDb ~ error:", error);
    console.log({ error });
  }
};
