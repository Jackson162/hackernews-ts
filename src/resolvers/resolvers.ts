import { LinkInterface } from "../types";
import { Link } from "../classes";
import { info_resolver } from "./query/info";
import { feed_resolver } from "./query/feed";
import { _id_resolver, url_resolver, description_resolver } from "./link/link";

const links = [
  new Link("link-0", "www.howtographql.com", "Fullstack tutorial for GraphQL"),
  new Link(
    "linker-1",
    "www.linkernetwork.com",
    "Linker networks is an AI company."
  ),
  new Link("linker-2", "www.random.com", "random~~~"),
];

export const resolvers = {
  Query: {
    info: info_resolver,
    feed: feed_resolver,
  },
  Mutation: {
    post: (_: void, args: LinkInterface): Link => {
      const link = new Link(`link-${links.length}`, args.url, args.description);
      links.push(link);
      return link;
    },
  },
  Link: {
    // Link type from Link class!
    // simple resolvers can be omitted.
    _id: _id_resolver,
    url: url_resolver,
    description: description_resolver,
  },
};
