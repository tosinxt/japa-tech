import { Construction, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const ComingSoon = () => {
  const location = useLocation();
  
  // Extract page name from pathname
  const getPageName = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    
    // Convert kebab-case or camelCase to Title Case
    return lastSegment
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space
      .replace(/[-_]/g, ' ') // kebab-case to space
      .replace(/\b\w/g, l => l.toUpperCase()); // capitalize first letter of each word
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="mx-auto h-24 w-24 bg-purple-100 rounded-full flex items-center justify-center">
            <Construction className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Coming Soon
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            The <span className="font-medium text-purple-600">{getPageName()}</span> page is currently under development.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            What's Coming?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            We're working hard to bring you an amazing experience. This page will include:
          </p>
          <ul className="text-left text-sm text-gray-600 space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              Modern and intuitive interface
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              Advanced functionality
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              Seamless user experience
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            to="/admin/home"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          
          <p className="text-xs text-gray-500">
            Expected completion: Q1 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
