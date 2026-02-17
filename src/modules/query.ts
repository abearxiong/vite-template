import { QueryClient } from '@kevisual/query';

export const query = new QueryClient({
  url: '/api/router',
});

export const queryClient = new QueryClient({
  url: '/client/router',
});