import { Schema, model } from "mongoose";
import { LinkInterface } from "../types";

const linkSchema = new Schema<LinkInterface>({
  id: { type: Schema.Types.ObjectId, required: true, index: true },
  url: { type: String, require: true },
  description: { type: String, require: true },
});

export const LinkModel = model("Link", linkSchema);
