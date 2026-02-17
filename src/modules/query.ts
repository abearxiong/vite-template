import { Query } from '@kevisual/query';
import { QueryLoginBrowser } from '@kevisual/api/login'
export const query = new Query({
  url: '/api/router',
});

export const queryClient = new Query({
  url: '/client/router',
});

export const queryLogin = new QueryLoginBrowser({
  query: query
});