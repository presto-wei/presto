import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/dashboard/overview')({
	component: RouteComponent,
})

function RouteComponent() {
	return <div>Hello "/_authed/dashboard/overview"!</div>
}
