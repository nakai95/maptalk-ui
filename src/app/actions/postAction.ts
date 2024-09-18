"use server";

import { FetchUsersApiClient, UsersRepository } from "@/repositories";
import { redirect } from "next/navigation";

const client = new FetchUsersApiClient();
const defaultRepository = new UsersRepository(client);

export async function postAction(
  formData: FormData,
  UsersRepository = defaultRepository
) {
  const name = formData.get("name") as string;
  const avatar = formData.get("avatar") as string;
  const user = await UsersRepository.createUser({ name, avatar });
  redirect(`${user.id}`);
}
