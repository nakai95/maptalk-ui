"use server";

import { redirect } from "next/navigation";

export async function postAction(formData: FormData) {
  const name = formData.get("name");
  const avatar = formData.get("avatar");
  console.log(name, avatar);
  redirect(`${name}`);
}
