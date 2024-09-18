import { User } from "../users";

export type DraftPost = {
  userId: string;
  message: string;
  coordinate: Coordinate;
};

export type Post = {
  id: string;
  user: User;
  message: string;
  createdAt: Date;
  coordinate: Coordinate;
};

export type Coordinate = {
  longitude: number;
  latitude: number;
};
