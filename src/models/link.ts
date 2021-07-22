import { Schema, model } from "mongoose";
import { LinkInterface, IdInterface } from "../types";

type link = LinkInterface & IdInterface;

const linkSchema = new Schema<link>({
  id: { type: String, required: true, index: true },
  url: { type: String, require: true },
  description: { type: String, require: true },
});

export const LinkModel = model("Link", linkSchema);
