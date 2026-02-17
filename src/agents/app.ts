import { QueryRouterServer } from "@kevisual/router/browser"
import { useContextKey } from '@kevisual/context'
export const app = useContextKey('app', new QueryRouterServer())