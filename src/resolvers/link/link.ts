import { Link } from "../../classes";

export const _id_resolver = (link: Link) => link._id;
export const url_resolver = (link: Link) => link.url;
export const description_resolver = (link: Link) => link.description;
