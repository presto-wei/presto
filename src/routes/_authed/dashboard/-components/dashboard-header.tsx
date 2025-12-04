import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { GlobalInput } from './global-input'

import { HeaderMenus } from './header-menus'

export function DashboardHeader() {
	return (
		<header className="bg-background/40 sticky top-0 z-50 flex h-(--header-height) shrink-0 items-center gap-2 border-b backdrop-blur-md transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) md:rounded-tl-xl md:rounded-tr-xl">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2">
				<SidebarTrigger className="size-9" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<div className="lg:flex-1">
					<GlobalInput />
				</div>
				<HeaderMenus />
			</div>
		</header>
	)
}
