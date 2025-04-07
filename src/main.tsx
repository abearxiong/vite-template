import { createRoot } from 'react-dom/client';
import { App, AppRoute } from './pages/App.tsx';
import { CustomThemeProvider } from '@kevisual/components/theme/index.tsx';

console.log('cu',)
createRoot(document.getElementById('root')!).render(
  <CustomThemeProvider>
    <AppRoute />
  </CustomThemeProvider>,
);
