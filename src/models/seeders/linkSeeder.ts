import { connectMongodb } from "../../config/mongoose";
import data from "../../dummyData.json";
import { LinkModel } from "../link";

const db = connectMongodb();

db.once("open", async () => {
  // 2nd arg is emitted in mongoose doc!?
  // await is used for promise, if you pass 3rd arg(cb), it is not a promise
  await LinkModel.insertMany(data.links).catch((err) => console.log(err));
  console.log("link seed data is added.");
  process.exit();
});
