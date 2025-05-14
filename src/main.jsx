import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { appRouter } from './App.jsx';
import { Provider } from 'react-redux';
import store from './app/store'; // ✅ Make sure this path is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);