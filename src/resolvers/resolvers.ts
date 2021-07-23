import { info_resolver } from "./query/info";
import { feed_resolver } from "./query/feed";
import { _id_resolver, url_resolver, description_resolver } from "./link/link";
import { create_link_resolver } from "./mutation/create_link";
import { update_link_resolver } from "./mutation/update_link";
import { delete_link_resolver } from "./mutation/delete_link";
export const resolvers = {
  Query: {
    info: info_resolver,
    feed: feed_resolver,
  },
  Mutation: {
    create_link: create_link_resolver,
    update_link: update_link_resolver,
    delete_link: delete_link_resolver,
  },
  Link: {
    // Link type from Link class!
    // simple resolvers can be omitted.
    _id: _id_resolver,
    url: url_resolver,
    description: description_resolver,
  },
};
