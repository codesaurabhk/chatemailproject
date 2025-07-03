import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Text from '../components/text/text';
import Sidebar from '../components/SideBar/Sidebar';
import EmailMessages from '../components/EmailMessages/EmailMessages';
import MailPage from '../Pages/MailPage';


const PageRouter = () => {
    const router =createBrowserRouter([
      {
      path: "/",
      element: (
        <>
          <MailPage/>
        </>
      ),
    },
       {
      path: "/sidebar",
      element: (
        <>
          <Sidebar/>
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