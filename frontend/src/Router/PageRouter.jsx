import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Text from '../components/text/text';

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
    ])
  return (

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default PageRouter;