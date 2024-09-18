import { DraftUser } from "@/domain";
import { UsersApiClient } from "./interface";

export class UsersRepository {
  constructor(private client: UsersApiClient) {}

  async createUser(draftUser: DraftUser) {
    return await this.client.createUser(draftUser);
  }

  async getUser(id: string) {
    return await this.client.getUser(id);
  }
}
