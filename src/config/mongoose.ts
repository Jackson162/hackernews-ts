import mongoose from "mongoose";

const MONGODB_URL = "mongodb://localhost/hackernews-ts";

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const db = mongoose.connection;

db.on("error", () => {
  console.log("detect mongodb error!!!");
});

db.once("open", () => {
  console.log("mongodb is connected");
});

// export a empty function, so there is something to execute in index.ts
// if no import variable used, import in .ts can not be successfully compile to .js
export function importMongooseConfig() {}
