"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Hotel, Calendar,Warehouse } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SidebarComponent() {
  const pathname = usePathname()

  const navItems = [
    { id: "home", label: "Inicio", icon: Home, href: "/admin" },
    { id: "reservas", label: "Reservas", icon: Calendar, href: "/admin/reservas" },
    { id: "habitaciones", label: "Habitaciones", icon: Warehouse, href: "/admin/habitaciones" },
  ]

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-200" style={{ backgroundColor: "white" }}>
      {/* Logo Section */}
      <div className="flex h-16 items-center justify-center border-b border-gray-200 px-6">
        <div className="flex items-center space-x-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--hotel-gold)" }}
          >
            <Hotel className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold" style={{ color: "var(--hotel-blue)" }}>
              Hotel Coventry
            </span>
            <span className="text-xs" style={{ color: "var(--hotel-gold)" }}>
              Panel de Control
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map(({ id, label, icon: Icon, href }) => {
          let isActive = false

          if (href === "/admin") {
            isActive = pathname === "/admin"
          } else {
            isActive = pathname === href || pathname.startsWith(`${href}/`)
          }

          return (
            <Link key={id} href={href} className="block">
              <Button
                variant="ghost"
                aria-current={isActive ? "page" : undefined}
                className="w-full justify-start gap-3 h-12 text-left font-medium transition-all duration-200 hover:shadow-md"
                style={{
                  backgroundColor: isActive ? "var(--hotel-blue)" : "transparent",
                  color: isActive ? "white" : "var(--hotel-blue)",
                }}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
