import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
// import EmailMessages from '../components/EmailMessages/EmailMessages'
import { Outlet } from 'react-router-dom'

const MailPage = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <Outlet />
      {/* <EmailMessages/> */}
    </div>
  )
}

export default MailPage;
