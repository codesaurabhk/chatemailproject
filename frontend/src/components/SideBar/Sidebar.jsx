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
import { IoSquareOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    <div className='sidebarm'>
      <div className='user-box'>
        <img className='dp' src={Img} alt="profile" />
        <div>
          <div className='name'>James Hong</div>
          <div className='emailhong'>Jnh343@example.com</div>
        </div>
      </div>

      <div className='compose'><FaRegEdit />Compose</div>

      <div className='section'>
        <div className='section-title'>Emails</div>
        <div className='item active'><span><HiOutlineInbox />Inbox</span> <span className="count">56</span></div>
        <div className='item'><span><FaRegStar />Starred</span> <span >46</span></div>
        <div className='item'><span><IoRocketOutline />Sent</span> <span >14</span></div>
        <div className='item'><span><FaRegFilePdf />Drafts</span> <span >12</span></div>
        <div className='item'><span><RiDeleteBinLine />Deleted </span><span >08</span></div>
        <div className='item'><span><RiSpam2Line />Spam </span><span >0</span></div>
        <div className='item'><span><ImCompass />Important </span><span >12</span></div>
        <div className='item'><span><PiUploadLight />All Emails </span><span >34</span></div>
        <div className='item'>Less </div>
        {/* <div className='item'><ImCompass />Show More</div> */}
      </div>

      <div className='section'>
        <div className='section-title'>Labels</div>
        <div className='label'><span className='dot team'></span> Team Events</div>
        <div className='label'><span className='dot work'></span> Work</div>
        <div className='label'><span className='dot external'></span> External</div>
        <div className='label'><span className='dot projects'></span> Projects</div>
        <div className='item'>Show More</div>
      </div>

      <div className='section'>
        <div className='section-title'>Folders</div>
        <div className='label'><span className='dot projects'></span> Projects</div>
        <div className='label'><span className='dot personal'></span> Personal</div>
        <div className='label'><span className='dot finance'></span> Finance</div>
      </div>
    </div>
  );
};

export default Sidebar;
