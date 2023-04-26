import ReactDOM from 'react-dom/client';
import Root from './client/components/Root';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom';

async function start() {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
  
    root.render(
      <React.StrictMode>
        <StaticRouter>
          <Root />
        </StaticRouter>
      </React.StrictMode>
    );
  }
  
  start();