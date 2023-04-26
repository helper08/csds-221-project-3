import ReactDOM from 'react-dom/client';
import Root from './client/components/Root';
import React from 'react';

async function start() {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
  
    root.render(
      <Root />
    );
  }
  
  start();