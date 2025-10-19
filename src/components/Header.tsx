import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Publications', href: '/publications' },
    { name: 'Conference', href: '/conference' },
    { name: 'Team', href: '/team' },
    { name: 'Activities', href: '/activities' },
    { name: 'Join us', href: '/contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4 pb-1">
          {/* 第一行：左侧 Logo，仅保留左侧内容 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center ml-4">
              <Link to="/" className="flex items-center">
                <img src="/hku_logo_color.jpg" alt="HKU Logo" className="h-16 w-auto mr-3" />
                <span className="text-black dark:text-white font-bold text-3xl">HKU Ultrafast Nonlinear Optical Laboratory</span>
              </Link>
            </div>

            {/* 移动端菜单按钮：仅在 md 以下显示 */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-200 hover:text-hku-green dark:hover:text-hku-green focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* 第二行：桌面端导航，居中显示（移动到容器外层实现全宽边线） */}
          {/* 原 nav 移除，改为下面全宽容器内 */}
        </div>
      </div>

      {/* 全宽顶部边线包裹导航 */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex justify-center items-center space-x-12 pt-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'px-5 py-2 text-lg transition-colors duration-200 border-b-4 font-bold text-gray-900 dark:text-white border-black dark:border-white'
                    : 'px-5 py-2 text-lg transition-colors duration-200 border-b-4 font-medium text-gray-700 dark:text-gray-200 border-transparent hover:text-hku-green dark:hover:text-hku-green'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-700 rounded-lg mb-4 transition-colors duration-300">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-3 py-2 text-base transition-colors duration-200 border-b-4 font-bold text-gray-900 dark:text-white border-black dark:border-white'
                    : 'block px-3 py-2 text-base transition-colors duration-200 border-b-4 font-medium text-gray-700 dark:text-gray-200 hover:text-hku-green dark:hover:text-hku-green border-transparent'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;