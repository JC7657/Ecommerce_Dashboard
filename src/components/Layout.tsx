import React, { useState } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-6 left-6 z-50 p-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 border border-purple-500"
          aria-label="Open sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="lg:ml-64">
        <main className="pt-20 pb-8 lg:pt-8">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};