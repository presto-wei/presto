import {
	BadgeCheck,
	Bell,
	CreditCard,
	EllipsisVertical,
	LogOut,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'

const User = {
	name: 'shadcn',
	email: 'm@example.com',
	avatar: '/avatars/shadcn.jpg',
}

// 定义trigger类型枚举
type TriggerVariant = 'avatar' | 'sidebar'

interface UserDropdownMenuProps {
	triggerVariant?: TriggerVariant
}

// 抽离出渲染触发器的独立函数
function renderTrigger(triggerVariant: TriggerVariant) {
	if (triggerVariant === 'avatar') {
		return (
			<DropdownMenuTrigger asChild>
				<span className="relative flex size-8 shrink-0 overflow-hidden rounded-full">
					<Avatar className="rounded-lg">
						<AvatarImage src={User.avatar} alt={User.name} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</span>
			</DropdownMenuTrigger>
		)
	} else {
		return (
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				>
					<Avatar className="w-8 h-8 rounded-lg">
						<AvatarImage src={User.avatar} alt={User.name} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="grid flex-1 text-left text-sm leading-tight">
						<span className="truncate font-medium">{User.name}</span>
						<span className="truncate text-xs">{User.email}</span>
					</div>
					<EllipsisVertical className="size-4" />
				</SidebarMenuButton>
			</DropdownMenuTrigger>
		)
	}
}

export function UserDropdownMenu({
	triggerVariant = 'avatar',
}: UserDropdownMenuProps) {
	const { isMobile } = useSidebar()

	return (
		<DropdownMenu>
			{renderTrigger(triggerVariant)}

			<DropdownMenuContent
				className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
				side={isMobile ? 'bottom' : 'right'}
				align="end"
				sideOffset={4}
			>
				<DropdownMenuLabel className="p-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<Avatar className="h-8 w-8 rounded-lg">
							<AvatarImage src={User.avatar} alt={User.name} />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">{User.name}</span>
							<span className="truncate text-xs">{User.email}</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BadgeCheck />
						Account
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCard />
						Billing
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Bell />
						Notifications
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">
					<LogOut />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
