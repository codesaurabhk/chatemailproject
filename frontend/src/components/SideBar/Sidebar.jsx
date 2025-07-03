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


import EmailModal from '../EmailModal/EmailModal';


const Sidebar = () => {
  const [emailshow, setEmailShow] = useState(false)
    const [showMore, setshowMore] = useState(false);
    const [showMores, setshowMores] = useState(false);
    const [showMoref, setshowMoref] = useState(false);
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
        <div className='item active'><span><HiOutlineInbox />Inbox</span> <span className="count">56</span></div>
        <div className='item'><span><FaRegStar />Starred</span> <span >46</span></div>
        <div className='item'><span><IoRocketOutline />Sent</span> <span >14</span></div>
        <div className='item'><span><FaRegFilePdf />Drafts</span> <span >12</span></div>
        <div className='item'><span><RiDeleteBinLine />Deleted </span><span >08</span></div>
        <div className='item'><span><RiSpam2Line />Spam </span><span >0</span></div>
        {showMore && (<>
        <div className='item'><span><ImCompass />Important </span><span >12</span></div>
        <div className='item'><span><PiUploadLight />All Emails </span><span >34</span></div>
        </>)}
        
        <div className='item' onClick={() => setshowMore(prev => !prev)}>{showMore ? "Show Less" : "Show More"} {!showMore && <FaAngleDown />} {showMore && <FaAngleUp /> } </div>
      </div>
        
      <div className='section border-bootom'>
        <div className='section-title'>Labels <div className='plus'><FaSquarePlus /></div></div>
        <div className='label'> <input type="checkbox"   className='dot team' /> Team Events</div>
        <div className='label'> <input type="checkbox" className='dot work' /> Work</div>
        <div className='label'> <input type="checkbox" className='dot external' /> External</div>
        <div className='label'> <input type="checkbox" className='dot projects'/> Projects</div>
        {showMores && (<> 
        <div className='label'> <input type="checkbox" className='dot applications'/> Applications</div>
        <div className='label'> <input type="checkbox" className='dot design'/> Design</div>
        </>)}
        <div className='item' onClick={()=> setshowMores(prev => !prev)}>{showMores ? "Show Less" : "Show More"}{!showMores && <FaAngleDown/>} {showMores && <FaAngleUp/>}</div>
      </div>

      <div className='section border-bootom'>
        <div className='section-title'>Folders <div className='plus'><FaSquarePlus /></div></div>
        <div className='label'><FaFolder className='projects'/> Projects</div>
        <div className='label'><FaFolder className='personal'/> Personal</div>
        <div className='label'><FaFolder className='finance'/> Finance </div>
        {showMoref && (<>
         <div className='label'><FaFolder className='projectk'/>Projects </div>
        </>)}
        <div className='item' onClick={()=> setshowMoref(prev => !prev)}>{showMoref ? "Show Less" : "Show More"} {!showMoref && <FaAngleDown/>} </div>
       
        
      </div>
    </div>
  );
};

export default Sidebar;
