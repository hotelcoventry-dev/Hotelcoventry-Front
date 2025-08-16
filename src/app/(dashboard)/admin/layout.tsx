import { NavbarComponent } from "@/components/NavbarComponent"
import { SidebarComponent } from "@/components/SidebarComponent"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Children } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <SidebarComponent />
                <div className="flex-1 flex flex-col">
                    <NavbarComponent />
                    <main className="flex-1 p-6 bg-gray-50/50">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    )
}

