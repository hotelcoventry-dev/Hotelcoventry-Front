"use client"

import { Bell, ChevronDown, User, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuthContext } from "@/context/authContext"
import { useRouter } from "next/navigation";

export function NavbarComponent() {
  const { resetUserData, user, isAuth } = useAuthContext();
  const router = useRouter();
  const logout = () => {
    resetUserData();
    router.push("/");
  }
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      {/* Left side - Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-semibold" style={{ color: "var(--hotel-blue)" }}>
          Dashboard
        </h1>
      </div>

      {/* Right side - Notifications and User Menu */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5" style={{ color: "var(--hotel-blue)" }} />
          <span
            className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs font-medium text-white flex items-center justify-center"
            style={{ backgroundColor: "var(--hotel-gold)" }}
          >
            3
          </span>
        </Button>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-3 hover:bg-gray-100 transition-colors px-3 py-2 h-auto"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/hotel-manager-avatar.png" />
                <AvatarFallback className="text-white font-medium" style={{ backgroundColor: "var(--hotel-blue)" }}>
                  AD
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium" style={{ color: "var(--hotel-blue)" }}>
                  Admin Hotel
                </span>
                <span className="text-xs text-gray-500">Administrador</span>
              </div>
              <ChevronDown className="h-4 w-4" style={{ color: "var(--hotel-blue)" }} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Configuración</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-red-600" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Cerrar Sesión</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
