const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");
    //await mongoose.connect("mongodb://127.0.0.1:27017/blog", {
    //  dbName: "blog
    //});
    console.log("db connected succcessfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = {
  dbConnect,
};
