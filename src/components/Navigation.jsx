import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../nav-items';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ChanTweet</Link>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium",
                location.pathname === item.to
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              )}
            >
              {item.icon}
              <span className="ml-2">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;