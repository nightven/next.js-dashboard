const { default: mongoose } = require("mongoose");
const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connect");
      return;
    }
    const db = await mongoose.connect(process.env.DB_HOST);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
