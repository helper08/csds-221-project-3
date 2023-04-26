import ReactDOM from 'react-dom/client';
import Root from './client/components/Root';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

async function start() {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
  
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
  
  start();