export default function Sidebar() {
  return (
    <div className="flex flex-row h-full ">
      <nav className="flex flex-col justify-between w-20 h-screen shadow-lg bg-white dark:bg-gray-800">
        <div className="mt-10 mb-10">
          <a href="#">
            <img
              src="avatar/avatar1.png"
              className="w-10 h-10 mx-auto mb-3 rounded-full"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
