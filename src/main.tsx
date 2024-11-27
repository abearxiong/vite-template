import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import '@build/tailwind/main.css';

import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
