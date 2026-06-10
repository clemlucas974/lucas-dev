import React from 'react';

import ReactDOM from 'react-dom/client';

import '@fontsource-variable/fraunces/wght-italic.css';
import '@fontsource/electrolize/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import { Analytics } from '@vercel/analytics/react';

import App from './App';
import './fonts.css';
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
