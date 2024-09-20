"use server";
import Image from "next/image";
import {
  getInitialAvatar,
  postAction,
  selectNextAvatar,
  selectPrevAvatar,
} from "./actions";
import { cookies } from "next/headers";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PrimaryButton,
  TextField,
} from "@/components";

/**
 * ホーム画面
 * @describe ユーザー名とアバターを選択する画面。選択が完了したらマップ画面に遷移する。
 */
export default async function Home() {
  const cookieStore = cookies();
  const cookieAvatar = cookieStore.get("avatar");
  const initialAvatar = await getInitialAvatar();
  const avatar = cookieAvatar?.value || initialAvatar;

  return (
    <div className="items-center bg-white dark:bg-gray-800 px-5 py-12 lg:px-20">
      <div className="mx-auto max-w-screen-xl h-screen px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
            Create Guest Account
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Set your avatar and name.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-1">
            <form action={selectPrevAvatar}>
              <button data-testid="prevButton" type="submit">
                <ChevronLeftIcon className="w-10 h-24" />
              </button>
            </form>
            <div className="relative mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              {avatar && (
                <Image
                  alt="avatar"
                  data-testid="selectAvatar"
                  src={avatar}
                  fill
                  priority
                  sizes="24"
                />
              )}
            </div>
            <form action={selectNextAvatar}>
              <button data-testid="nextButton" type="submit">
                <ChevronRightIcon className="w-10 h-24" />
              </button>
            </form>
          </div>
          <form action={postAction}>
            <div>
              <input
                type="hidden"
                name="avatar"
                data-testid="avatarInput"
                value={avatar}
              />
              <TextField name="name" required placeholder="Your Name" />
            </div>
            <div className="mt-10">
              <PrimaryButton type="submit">Get Started</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
