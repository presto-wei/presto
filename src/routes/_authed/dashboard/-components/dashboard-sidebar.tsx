import { Link } from '@tanstack/react-router'
import { LayoutDashboardIcon, ListTodoIcon, Zap } from 'lucide-react'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Route as overviewRoute } from '@/routes/_authed/dashboard/overview'
import { Route as todosRoute } from '@/routes/_authed/dashboard/todos'
import { UserDropdownMenu } from './user-dropdown-menu'

const MenuItems = [
	{
		title: 'overview',
		icon: LayoutDashboardIcon,
		to: overviewRoute.to,
	},
	{
		title: 'todos',
		icon: ListTodoIcon,
		to: todosRoute.to,
	},
]

export function DashboardSidebar() {
	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<Link to={overviewRoute.to}>
								<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
									<Zap className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">Presto</span>
									<span className="truncate text-xs">
										attention is all you need.
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{MenuItems.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild tooltip={item.title}>
									<Link
										to={item.to}
										activeOptions={{ exact: true }}
										activeProps={{
											className:
												'bg-sidebar-accent text-sidebar-accent-foreground',
										}}
									>
										<item.icon className="size-4" />
										<span className="truncate">{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<UserDropdownMenu triggerVariant="sidebar" />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	)
}
