import { NavLink, useLocation } from "react-router-dom";
import {
  Briefcase,
  BookOpen,
  Users,
  GraduationCap,
  Settings,
  LogOut,
  ChevronDown,
  Home
} from "lucide-react";
import { useState } from "react";
import japaLogo from "../../assets/JAPALOGO.png";

const SideBar = ({ onNavigate }) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({
    jobs: false,
    courses: false,
    users: false,
    coaching: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: Home,
      path: "/admin/home",
      items: []
    },
    {
      name: "Job Posting",
      icon: Briefcase,
      path: "/admin/postjob",
      items: [
        { name: "Post New Job", path: "/admin/postjob/new" },
        { name: "Manage Jobs", path: "/admin/postjob/manage" }
      ]
    },
    {
      name: "Courses",
      icon: BookOpen,
      path: "/admin/courses",
      items: [
        { name: "Add New Course", path: "/admin/courses/new" },
        { name: "Manage Courses", path: "/admin/courses/manage" }
      ]
    },
    {
      name: "Users",
      icon: Users,
      path: "/admin/users",
      items: [
        { name: "All Users", path: "/admin/users" },
        { name: "Add User", path: "/admin/users/add" }
      ]
    },
    {
      name: "Coaching",
      icon: GraduationCap,
      path: "/admin/coaching",
      items: [
        { name: "Coaching Sessions", path: "/admin/coaching/sessions" },
        { name: "Coaches", path: "/admin/coaching/coaches" }
      ]
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/admin/settings",
      items: []
    }
  ];

  const isActive = (path) => {
    return location.pathname === path || 
           location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200 w-64">
      <div className="p-4 border-b border-gray-200">
        <NavLink to="/admin/home" className="flex items-center space-x-2">
          <img src={japaLogo} alt="Japa Talent" className="h-10" />
        </NavLink>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="space-y-1">
          {navItems.map((item) => (
            <div key={item.name} className="space-y-1">
              {item.items.length > 0 ? (
                <button
                  onClick={() => toggleMenu(item.name.toLowerCase())}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        isActive(item.path) ? 'text-purple-600' : 'text-gray-400'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      openMenus[item.name.toLowerCase()] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={onNavigate}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.path) ? 'text-purple-600' : 'text-gray-400'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              )}

              {item.items.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openMenus[item.name.toLowerCase()] ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="py-1 pl-11 pr-2 space-y-1">
                    {item.items.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        onClick={onNavigate}
                        className={`block px-3 py-2 text-sm rounded-md ${
                          isActive(subItem.path)
                            ? 'bg-purple-50 text-purple-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button 
          className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50"
          onClick={() => {
            // Handle sign out
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("details");
            window.location.href = "/login";
          }}
        >
          <LogOut className="mr-3 h-5 w-5 text-red-500" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
