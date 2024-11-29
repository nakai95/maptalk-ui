import { CreateUser, GetUser, UsersApiClient } from "./interface";

export class FetchUsersApiClient implements UsersApiClient {
  createUser: CreateUser = async (draftUser) => {
    // eslint-disable-next-line no-console
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(draftUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await response.json();
  };

  getUser: GetUser = async (id) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`
    );
    return await response.json();
  };
}
