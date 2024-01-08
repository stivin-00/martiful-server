import mongoose, { ConnectOptions, Connection } from "mongoose";

let connection: mongoose.Connection | null = null;

export const connectToDatabase = async (): Promise<Connection> => {
  if (connection) {
    console.log("Database connection already established");
    return connection;
  }

  try {
    const uri =
      "mongodb+srv://stivin:vivian2436@martiful.cmoufbr.mongodb.net/?retryWrites=true&w=majority";
    const options: ConnectOptions = {
      autoIndex: false,
    };

    connection = await mongoose.createConnection(uri, options);
    if (connection) {
      console.log("Connected to the database");
    }
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export const disconnectFromDatabase = async (): Promise<void> => {
  if (connection) {
    await mongoose.disconnect();
    console.log("Disconnected from the database");
    connection = null;
  }
};
