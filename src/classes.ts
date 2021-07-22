import { LinkInterface, Id } from "./types";

export class Link implements LinkInterface, Id {
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
