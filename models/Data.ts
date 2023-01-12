import { keyable, map } from "./DataTypes";

export type Data = {
  intro: String;
  picture: string;
  about: string;
  email: string;
  tagline: String[];
  bio: String[];
  experience: keyable[];
  socials: map;
};
