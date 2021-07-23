import { Error } from "mongoose";
import { LinkModel } from "../../models/link";
import { Link } from "../../classes";
import { LinkInterface } from "../../types";

export const create_link_resolver = async (
  _: void,
  { url, description }: LinkInterface
): Promise<Link> => {
  let new_link = await LinkModel.create({ url, description }).catch(
    (err: Error) => {
      return err;
    }
  );

  console.log(new_link);
  // reassign type? static => no?
  new_link = new Link(new_link._id, new_link.url, new_link.description);
  // console.log(new_link);
  return new_link;
};
