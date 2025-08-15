import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/manager/documents/documents/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/manager/documents/index/$id"!</div>
}
