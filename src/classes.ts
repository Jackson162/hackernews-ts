import { LinkInterface, IdInterface } from "./types";

export class Link implements LinkInterface, IdInterface {
  private static typeOfInstance = "LINK!!!!";
  constructor(
    public _id: string,
    public url: string,
    public description: string
  ) {
    this._id = _id;
    this.url = url;
    this.description = description;
  }
}
