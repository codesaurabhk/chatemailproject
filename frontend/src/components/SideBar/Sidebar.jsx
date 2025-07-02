import React from 'react'
import './Sidebar.css'
import Img from '../../assets/images/dp.jpg'

const Sidebar = () => {
  return (
    <div className='sidebarm'>
        <div className='first'>
            <div ><div ><img className='dp' src={Img} alt="" /></div></div>
            <div><div className='name'>James Hong</div>
            <div className='email'>Jnh343@example.com</div></div>
        </div>

        <div>
            <div className='compose'>Compose</div>
        </div>
        <div>
            <div>Emails </div>
            <div>Starred</div>
            <div>Sent</div>
            <div>Drafts</div>
            <div>Deleted</div>
            <div>Spam</div>
            <div>Show More </div>
        </div>
        <div>
            <div>Labels</div>
            <div>Team Events</div>
            <div>Work</div>
            <div>External</div>
            <div>Show More </div>
        </div>
        <div>
            <div>Folders</div>
            <div>projects</div>
            <div>personal</div>
            <div>finance</div>
        </div>
    </div>
  )
}

export default Sidebar