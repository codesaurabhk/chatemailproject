import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Text from '../components/text/text';
import EmailMessages from '../components/EmailMessages/EmailMessages';

const PageRouter = () => {
    const router =createBrowserRouter([
       {
      path: "/",
      element: (
        <>
          <Text/>
        </>
      ),
    },
    {
      path: "/email",
      element: (
        <>
          <EmailMessages/>
        </>
      ),
    },
    ])
  return (

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default PageRouter;