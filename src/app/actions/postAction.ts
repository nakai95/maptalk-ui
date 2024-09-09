"use server";

import { FetchUsersApiClient, UserRepository } from "@/repositories";
import { redirect } from "next/navigation";

const client = new FetchUsersApiClient();
const defaultRepository = new UserRepository(client);

export async function postAction(
  formData: FormData,
  userRepository = defaultRepository
) {
  const name = formData.get("name") as string;
  const avatar = formData.get("avatar") as string;
  const user = await userRepository.createUser({ name, avatar });
  redirect(`${user.id}`);
}
