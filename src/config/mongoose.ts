import mongoose from "mongoose";

export function connectMongodb() {
  const MONGODB_URL = "mongodb://localhost/hackernews-ts";

  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", () => {
    console.log("detect mongodb error!!!");
  });

  db.once("open", () => {
    console.log("mongodb is connected");
  });

  return db;
}
