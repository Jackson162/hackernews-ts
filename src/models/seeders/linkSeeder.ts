import { connectMongodb } from "../../config/mongoose";
import data from "../../../dummyData.json";
import { LinkModel } from "../link";

const db = connectMongodb();

db.once("open", async () => {
  // 2nd arg is emitted in mongoose doc!?
  await LinkModel.insertMany(data.links, {}, (err, _) => console.log(err));
});
