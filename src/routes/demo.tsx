import { createFileRoute } from '@tanstack/react-router'
import App from '@/pages/demo/page'
export const Route = createFileRoute('/demo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <App />
}
