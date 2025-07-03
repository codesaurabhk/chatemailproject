import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import EmailMessages from '../components/EmailMessages/EmailMessages'

const MailPage = () => {
  return (
    <div style={{display:'flex'}}>
      <Sidebar/>
      <EmailMessages/>
    </div>
  )
}

export default MailPage;
