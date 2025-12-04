import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { BellIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { UserDropdownMenu } from './user-dropdown-menu'

export function HeaderMenus() {
	return (
		<div className="ml-auto flex items-center gap-2">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon" className="relative">
						<BellIcon className="animate-tada" />
						<span className="bg-destructive absolute end-0 top-0 block size-2 shrink-0 rounded-full"></span>
					</Button>
				</DropdownMenuTrigger>
			</DropdownMenu>

			<Button variant="outline" size="icon">
				<SunIcon />
				<span className="sr-only">Toggle theme</span>
			</Button>

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="icon">
						<SettingsIcon className="animate-tada" />
					</Button>
				</DropdownMenuTrigger>
			</DropdownMenu>

			<Separator
				orientation="vertical"
				className="mx-2 data-[orientation=vertical]:h-4"
			/>

			<DropdownMenu>
				<UserDropdownMenu />
			</DropdownMenu>
		</div>
	)
}
