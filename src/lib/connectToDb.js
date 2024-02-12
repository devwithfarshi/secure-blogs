import mongoose from "mongoose";
import "colors";
const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log(`Using existing connection!`.bgCyan);
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connection[0].readyState;
    console.log(`MongoDB Connected successfully!`.bgCyan.underline);
  } catch (error) {
    console.log(`Error connecting to Mongoose: ${error}`);
  }
};
