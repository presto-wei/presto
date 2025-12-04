import { SearchIcon } from 'lucide-react'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

export function GlobalInput() {
	return (
		<div className="relative hidden max-w-sm flex-1 lg:block">
			<InputGroup>
				<InputGroupInput placeholder="Search..." />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<KbdGroup>
						<Kbd>Ctrl + K</Kbd>
					</KbdGroup>
				</InputGroupAddon>
			</InputGroup>
		</div>
	)
}
