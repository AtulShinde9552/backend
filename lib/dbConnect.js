const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://kamliyasoft:OXOgDFpgHUaLpZIp@cluster0.5yfvzdj.mongodb.net/grocery-store?retryWrites=true&w=majority",
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
