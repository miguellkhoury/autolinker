'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, LayoutDashboard, User, FileText, LogOut, Bell } from 'lucide-react';
import { mockUser, mockNotifications } from '@/lib/data/mockData';

export default function Navigation() {
  const pathname = usePathname();
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/profile', label: 'Profile', icon: User },
    { href: '/dashboard/certificates', label: 'Certificates', icon: FileText },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-nautical-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-gradient">
                AutoLinker
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    active
                      ? 'bg-ocean-50 text-ocean-600 font-medium'
                      : 'text-nautical-600 hover:bg-nautical-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-nautical-600 hover:bg-nautical-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="flex items-center space-x-3 pl-3 border-l border-nautical-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-nautical-800">{mockUser.name}</p>
                <p className="text-xs text-nautical-500 capitalize">{mockUser.role}</p>
              </div>
              <img
                src={mockUser.avatar}
                alt={mockUser.name}
                className="w-10 h-10 rounded-full ring-2 ring-ocean-100"
              />
            </div>

            <button className="p-2 text-nautical-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-nautical-100 bg-white">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg ${
                  active ? 'text-ocean-600' : 'text-nautical-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
