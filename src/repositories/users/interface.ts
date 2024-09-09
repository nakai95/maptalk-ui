import { DraftUser, User } from "@/domain";

export type CreateUser = (draftUser: DraftUser) => Promise<User>;
export type GetUser = (id: string) => Promise<User>;

export interface UsersApiClient {
  createUser: CreateUser;
  getUser: GetUser;
}
