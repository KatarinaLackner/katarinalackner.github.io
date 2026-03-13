import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@angi/one-design-system/components/RouterProvider';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      navigate={(href) => {
        window.location.href = href;
      }}
    >
      <App />
    </RouterProvider>
  </StrictMode>,
);
