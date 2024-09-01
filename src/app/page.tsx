import Image from "next/image";
import {
  getInitialAvatar,
  postAction,
  selectNextAvatar,
  selectPrevAvatar,
} from "./actions";
import { cookies } from "next/headers";

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
            Set your username and avatar.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-1">
            <form action={selectPrevAvatar}>
              <button id="prevButton" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
            <div className="relative mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
              {avatar && (
                <Image alt="avatar" src={avatar} fill priority sizes="24" />
              )}
            </div>
            <form action={selectNextAvatar}>
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
          <form action={postAction}>
            <div>
              <input type="hidden" name="avatar" value={avatar} />
              <input
                data-testid="nameInput"
                name="name"
                type="text"
                required={true}
                placeholder="Your Name"
                className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
