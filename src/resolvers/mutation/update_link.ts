import { Error } from "mongoose";
import { LinkModel } from "../../models/link";
import { Link } from "../../classes";
import { link_id_interface } from "../../types";

export const update_link_resolver = async <T extends link_id_interface>(
  _: void,
  args: T
): Promise<Link> => {
  let link = await LinkModel.findById(args._id)
    .exec()
    .catch((err: Error) => err);

  const updated_fields = Object.create(null);
  for (let arg in args) {
    if (args[arg] !== link[arg]) updated_fields[arg] = args[arg];
  }

  link = Object.assign(link, updated_fields);

  let updated_link = await link.save().catch((err: Error) => err);

  updated_link = new Link(
    updated_link._id,
    updated_link.url,
    updated_link.description
  );

  return updated_link;
};
