import Image from "next/image";
import { postAction } from "./postAction";

/**
 * ホーム画面
 * @describe ユーザー名とアバターを選択する画面。選択が完了したらマップ画面に遷移する。
 */
export default function Home() {
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
        <form action={postAction} className="flex flex-col items-center">
          <div className="relative mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
            <Image alt="avatar" src="/avatar/avatar1.png" fill />
          </div>
          <div>
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
  );
}
