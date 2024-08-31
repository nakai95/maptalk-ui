"use server";

import { redirect } from "next/navigation";

export async function postAction(formData: FormData) {
  const name = formData.get("name");
  redirect(`${name}`);
}
