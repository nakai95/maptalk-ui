"use server";

import { cookies } from "next/headers";

const avatars = [
  "/avatar/avatar1.png",
  "/avatar/avatar2.png",
  "/avatar/avatar3.png",
  "/avatar/avatar4.png",
];
let avatar = avatars[0];

export async function getInitialAvatar() {
  return avatar;
}

export async function selectPrevAvatar() {
  const index = avatars.indexOf(avatar);
  if (index === 0) {
    avatar = avatars[avatars.length - 1];
  } else {
    avatar = avatars[index - 1];
  }
  cookies().set("avatar", avatar);
}

export async function selectNextAvatar() {
  const index = avatars.indexOf(avatar);
  if (index === avatars.length - 1) {
    avatar = avatars[0];
  } else {
    avatar = avatars[index + 1];
  }
  cookies().set("avatar", avatar);
}
