" use client"
import Sidebar from '@/components/ui/SidebarLayout'
import './globals.css'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 min-h-screen p-6 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}