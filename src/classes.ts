import { LinkInterface, IdInterface } from "./types";

export class Link implements LinkInterface, IdInterface {
  private static typeOfInstance = "LINK!!!!";
  constructor(
    public id: string,
    public url: string,
    public description: string
  ) {
    this.id = id;
    this.url = url;
    this.description = description;
  }
}
