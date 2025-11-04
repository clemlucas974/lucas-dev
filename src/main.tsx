import React from 'react';

import ReactDOM from 'react-dom/client';

import { Analytics } from '@vercel/analytics/react';

import App from './App';
import './i18n/i18n';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
