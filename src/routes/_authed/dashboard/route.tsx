import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { DashboardHeader } from './-components/dashboard-header'
import { DashboardSidebar } from './-components/dashboard-sidebar'

export const Route = createFileRoute('/_authed/dashboard')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<SidebarProvider>
			<DashboardSidebar />
			<SidebarInset>
				<DashboardHeader />
				<main>
					<Outlet />
				</main>
			</SidebarInset>
		</SidebarProvider>
	)
}
