import { LinkInterface } from "../types";
import { Link } from "../classes";

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
    info: () => "This is hackernews clone.",
    feed: () => links,
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
    id: (link: Link) => link.id,
    url: (link: Link) => link.url,
    description: (link: Link) => link.description,
  },
};
