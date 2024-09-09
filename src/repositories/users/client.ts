import { CreateUser, GetUser, UsersApiClient } from "./interface";

export class FetchUsersApiClient implements UsersApiClient {
  createUser: CreateUser = async (draftUser) => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(draftUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.json();
  };

  getUser: GetUser = async (id) => {
    const response = await fetch(`http://localhost:8080/users/${id}`);
    return await response.json();
  };
}
