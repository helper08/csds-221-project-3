import ReactDOM from 'react-dom/client';
import Root from './client/components/Root';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

async function start() {
  console.log("bruh");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
  
start();