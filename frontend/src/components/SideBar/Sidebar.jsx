import React from 'react'
import './Sidebar.css'
import Img from '../../assets/images/dp.jpg'
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineInbox } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className='sidebarm'>
        <div className='first'>
            <div ><div ><img className='dp' src={Img} alt="" /></div></div>
            <div><div className='name'>James Hong</div>
            <div className='emailhong'>Jnh343@example.com</div></div>
        </div>

        <div>
            <div className='compose'><FaRegEdit />Compose</div>
        </div>
        <div className='email'>
            <div>Emails </div>
            <div> <HiOutlineInbox />Inbox</div>
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