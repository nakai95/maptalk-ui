import { forwardRef } from "react";

type Props = {
  icon: JSX.Element;
  placeholder: string;
  actionLabel: string;
  action: (formData: FormData) => Promise<void>;
};

export const ActionForm = forwardRef<HTMLFormElement, Props>(function form(
  { icon, placeholder, actionLabel, action },
  ref
) {
  return (
    <form data-testid="post-form" className="w-full" ref={ref} action={action}>
      <div className="relative max-w-md">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <input
          type="text"
          id="post-input"
          name="message"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {actionLabel}
        </button>
      </div>
    </form>
  );
});
