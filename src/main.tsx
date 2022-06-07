import React from 'react';
import ReactDOM from 'react-dom/client';
import AppThemeProvider from './themes/AppThemeProvider';
import App from './components/organisms/app';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { worker } from './mocks/browser';
import Invoices from './components/pages/invoices';
// src/index.js

async function prepare() {
  if (import.meta.env.DEV) {
    await import('../public/mockServiceWorker.js?worker');

    return worker.start();
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AppThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="invoices" element={<Invoices />} />
              <Route path="expenses" element={<h1>Expenses Tab!</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppThemeProvider>
    </React.StrictMode>
  );
});
