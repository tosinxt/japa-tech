import { Menu } from "lucide-react";

const my_data = JSON.parse(sessionStorage.getItem("details"));

const TopNav = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            type="button"
            className="p-2 rounded-md text-gray-500 lg:hidden hover:bg-gray-100"
            onClick={onMenuClick}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-900 lg:ml-0">
            Dashboard
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-medium">
                {my_data?.first_name?.[0]}{my_data?.last_name?.[0]}
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">
                {my_data?.first_name} {my_data?.last_name}
              </p>
              <p className="text-xs text-gray-500 truncate max-w-[180px]">
                {my_data?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;