import { User } from "@/domain";
import Image from "next/image";

export default function Sidebar({ user }: { user: User }) {
  return (
    <div className="flex flex-row h-full" data-testid="sidebar">
      <nav className="flex flex-col justify-between w-20 h-screen shadow-lg bg-white dark:bg-gray-800">
        <div className="mt-10 mb-10">
          <a href="#">
            <Image
              priority
              alt="avatar"
              src={user.avatar}
              width={40}
              height={40}
              className="!mx-auto !mb-3 !rounded-full"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
