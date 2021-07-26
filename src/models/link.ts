import { Schema, model } from "mongoose";
import { link_id_interface } from "../types";

const linkSchema = new Schema<link_id_interface>({
  url: { type: String, require: true },
  description: { type: String, require: true },
});

export const LinkModel = model<link_id_interface>("Link", linkSchema);
