import './Sidebar.css';
import Img from '../../assets/images/dp.jpg';
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineInbox } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa";
import { RiDeleteBinLine, RiSpam2Line } from "react-icons/ri";
import { ImCompass } from "react-icons/im";
import { PiUploadLight } from "react-icons/pi";
import { FaAngleDown,FaAngleUp } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { useEffect, useState } from 'react';

import EmailModal from '../EmailModal/EmailModal';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Sidebar = () => {
  const [emailshow, setEmailShow] = useState(false)
    const [showMore, setshowMore] = useState(false);
    const [showMores, setshowMores] = useState(false);
    const [showMoref, setshowMoref] = useState(false);
    const [emails, setEmails] = useState([]);

    useEffect(() => {
      const fetchEmails = async () => {
        try{
          const res = await axios.get("http://localhost:5000/api/email/receive")
          setEmails(res.data.data)
        }catch(error) {
          console.error("Failed to fetch emails", error)
        }
      }
      fetchEmails();
    },[]);

  return (
    <div className='sidebarm'>
      <div className='user-box'>
        <img className='dp' src={Img} alt="profile" />
        <div>
          <div className='name'>James Hong</div>
          <div className='emailhong'>Jnh343@example.com</div>
        </div>
      </div>

      <div className='compose' onClick={()=> setEmailShow(true)}>
        <FaRegEdit />Compose
        </div>
        <EmailModal show={emailshow} onClose={()=> setEmailShow(false)}/>

      <div className='section border-bootom'>
        <div className='section-title'>Emails</div>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/inbox'><span><HiOutlineInbox />Inbox</span> <span className="count">{emails.length}</span></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/starred'><span><FaRegStar />Starred</span> <span >46</span></NavLink>
         <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/sent'><span><IoRocketOutline />Sent</span> <span >14</span></NavLink>
         <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/drafts'><span><FaRegFilePdf />Drafts</span> <span >12</span></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/deleted'><span><RiDeleteBinLine />Deleted </span><span >08</span></NavLink>
         <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/spam'><span><RiSpam2Line />Spam </span><span >0</span></NavLink>
        {showMore && (<>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/important'><span><ImCompass />Important </span><span >12</span></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none'}} to='/allemails'><span><PiUploadLight />All Emails </span><span >34</span></NavLink>
        </>)}
        
        <div className='item' onClick={() => setshowMore(prev => !prev)}>{showMore ? "Show Less" : "Show More"} {!showMore && <FaAngleDown />} {showMore && <FaAngleUp /> } </div>
      </div>
        
      <div className='section border-bootom'>
        <div className='section-title'>Labels <div className='plus'><FaSquarePlus /></div></div>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/teamevents'><div className='label'> <input type="checkbox"   className='dot team' /> Team Events</div></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/work'><div className='label'> <input type="checkbox" className='dot work' /> Work</div></NavLink>
         <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/external'><div className='label'> <input type="checkbox" className='dot external' /> External</div></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/projects'><div className='label'> <input type="checkbox" className='dot projects'/> Projects</div></NavLink>
        {showMores && (<> 
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/applications'><div className='label'> <input type="checkbox" className='dot applications'/> Applications</div></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/design'><div className='label'> <input type="checkbox" className='dot design'/> Design</div></NavLink>
        </>)}
        <div className='item' onClick={()=> setshowMores(prev => !prev)}>{showMores ? "Show Less" : "Show More"}{!showMores && <FaAngleDown/>} {showMores && <FaAngleUp/>}</div>
      </div>

      <div className='section border-bootom'>
        <div className='section-title'>Folders <div className='plus'><FaSquarePlus /></div></div>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/design'><div className='label'><FaFolder className='projects'/> Projects</div></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/design'><div className='label'><FaFolder className='personal'/> Personal</div></NavLink>
        <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/design'><div className='label'><FaFolder className='finance'/> Finance </div></NavLink>
        {showMoref && (<>
         <NavLink className={({isActive}) => isActive ? 'item active' : 'item'} style={{textDecoration:'none', color:'black'}} to='/design'><div className='label'><FaFolder className='projectk'/>Projects </div></NavLink>
        </>)}
        <div className='item' onClick={()=> setshowMoref(prev => !prev)}>{showMoref ? "Show Less" : "Show More"} {!showMoref && <FaAngleDown/>} </div>
       
        
      </div>
    </div>
  );
};

export default Sidebar;
