import { ReactNode } from "react";

export function PrimaryButton({
  type,
  children,
}: {
  type: "submit" | "reset" | "button";
  children: ReactNode;
}) {
  return (
    <button
      type={type}
      className="w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
}
