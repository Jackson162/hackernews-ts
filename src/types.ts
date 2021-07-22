export interface IdInterface {
  _id: string;
}
export interface LinkInterface {
  url: string;
  description: string;
}

export type link_id_interface = LinkInterface & IdInterface;
