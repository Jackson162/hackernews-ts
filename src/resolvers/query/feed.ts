import { LinkModel } from "../../models/link";
import { Link } from "../../classes";
import { link_id_interface } from "../../types";

export const feed_resolver = async () => {
  let links = await LinkModel.find().exec();
  links = links.map(
    (link: link_id_interface): Link =>
      new Link(link._id, link.url, link.description)
  );
  return links;
};
