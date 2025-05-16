'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  Home,
  CreditCard,
  User,
  Route,
  List,
  Bell,
  Shield,
  LogOut,
} from 'lucide-react'
type MenuItem = {
  label: string
  icon: React.ElementType
  href: string
}
type MenuEntry = MenuItem | 'divider'
const mainMenu: MenuEntry[] = [
  { label: 'Dashboard', icon: Home, href: '/dashboard' },
  { label: 'Subscription', icon: CreditCard, href: '/subscription' },
  { label: 'Customer', icon: User, href: '/customers' },
  { label: 'Route', icon: Route, href: '/route' },
  { label: 'Order', icon: List, href: '/order' },
  { label: 'Lead', icon: List, href: '/lead' },
  'divider',
]
const secondaryMenu: MenuItem[] = [
  { label: 'Notification', icon: Bell, href: '/notification' },
  { label: 'Security', icon: Shield, href: '/security' },
  { label: 'Logout', icon: LogOut, href: '/logout' },
]
export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-64 h-screen border-r bg-white px-4 py-6 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex items-center mb-6 space-x-2">
          <img src="/logo.svg" alt="logo" className="h-6 w-6" />
          <span className="text-2xl font-semibold">VendHub</span>
        </div>
        {/* Main Menu */}
        <nav className="space-y-1">
          {mainMenu.map((item, index) => {
            if (item === 'divider') {
              return <hr key={index} className="my-4 border-gray-300" />
            }
            const Icon = item.icon
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center px-3 py-2 rounded-md text-sm font-medium',
                  isActive
                    ? 'bg-gray-100 text-black'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
      {/* Secondary Menu + Welcome Message */}
      <div className="space-y-1">


        {/* Notification, Security, Logout */}
        {secondaryMenu.map((item) => {
          const Icon = item.icon
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center px-3 py-2 rounded-md text-sm font-medium',
                isActive
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <Icon className="w-4 h-4 mr-3" />
              {item.label}
            </Link>
          )
        })}
        {/* Welcome Message */}
        <div className="text-sm text-gray-500 mt-4 px-3">
          Welcome back :wave: <br />
          <span className="font-semibold">Johnathan</span>
        </div>
      </div>
    </aside>
  )
}