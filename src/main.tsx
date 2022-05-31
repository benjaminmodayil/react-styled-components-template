import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/organisms/app';

import { worker } from './mocks/browser';
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
      <App />
    </React.StrictMode>
  );
});
