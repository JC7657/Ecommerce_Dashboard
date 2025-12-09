import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Overview', href: '/', icon: '📊' },
  { name: 'Sales', href: '/sales', icon: '💰' },
  { name: 'Products', href: '/products', icon: '📦' },
  { name: 'Customers', href: '/customers', icon: '👥' },
  { name: 'Analytics', href: '/analytics', icon: '📈' },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-purple-700 to-purple-800 shadow-xl transform transition-transform duration-300 ease-in-out
        lg:shadow-none lg:border-r lg:border-purple-600
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile close button */}
          <div className="lg:hidden flex items-center justify-between h-16 px-6 border-b border-purple-600">
            <h1 className="text-xl font-bold text-white tracking-tight">PYME Dashboard</h1>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop logo */}
          <div className="hidden lg:flex items-center justify-center h-16 px-6 border-b border-purple-600">
            <h1 className="text-xl font-bold text-white tracking-tight">PYME Dashboard</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                   className={`
                     group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                     ${isActive
                       ? 'bg-white/20 text-white border-r-2 border-white shadow-sm'
                       : 'text-purple-100 hover:bg-white/10 hover:text-white hover:translate-x-1'
                     }
                   `}
                  onClick={onClose}
                >
                  <span className={`mr-4 text-lg transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                   {isActive && (
                     <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                   )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-purple-600 bg-purple-900/50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
              </div>
              <div className="ml-4 min-w-0 flex-1">
                <p className="text-sm font-semibold text-white truncate">Admin User</p>
                <p className="text-xs text-purple-200 truncate">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};