const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,
      {
        dbName: "grocery-store",
      }
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = dbConnect; 
