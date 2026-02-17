import { Link, Outlet, createRootRoute, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Toaster } from '@/components/ui/sonner'
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='h-full overflow-hidden'>

      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
      </div>
      <hr />
      <main className='h-[calc(100%-4rem)] overflow-auto scrollbar'>
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
      <Toaster />
    </div>

  )
}