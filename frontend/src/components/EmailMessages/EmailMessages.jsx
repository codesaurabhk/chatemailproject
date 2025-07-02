import React from 'react'
import '../EmailMessages/EmailMessages.css'
import { IoIosSearch, IoMdSettings } from 'react-icons/io'
import { RiFilterOffLine } from 'react-icons/ri'
import { BiRefresh } from 'react-icons/bi'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'
import { AiFillStar } from 'react-icons/ai'

const EmailMessages = () => {
  return (
    <div className='mainemailmessage'>
      <div className="header">
        {/* inbox */}
        <div className="inbox">
            <span style={{color:'black', fontSize:'18px', fontWeight:600}}>Inbox</span>
            <span className='twothreemail'>2345 Emails <span style={{fontSize:'22px', borderRadius:'50%', fontWeight: 'bold',}}><BsDot style={{color:'#fba64b', marginTop:'10px'}}/></span> 56 Unread</span>
        </div>
        {/* filter */}
        <div className="filter">
            <span className='searchinputdiv'>
                <span style={{marginTop:'5px'}}><IoIosSearch/></span>
                <input className='searchtext' type="text" placeholder='Search Email' />
            </span>
            <span className='settingrefreshdiv'>
            <RiFilterOffLine/>
            <AiOutlineSetting/>
            <BiRefresh/>
            </span>
        </div>
    
      </div>
       {/* email message div */}
       <div className='justinmaindiv'>
        <div className='justinleftrightmaindiv'>
            {/* left */}
        <div className='justinmaindivleftdiv'>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
        <input type="checkbox"  style={{width:'18px', height:'18px', borderRadius:'5px'}}/>
        <span style={{backgroundColor:'#6941c6', color:'white', borderRadius:'50%', padding:'10px'}}>CD</span>
            </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <span style={{color:'', fontSize:'18px', fontWeight:600, marginBottom:'5px' }}>Justin Lapoinite</span>
            <span style={{color:'#636363', fontSize:'16px', }}>Client Dashboard</span>
            <span style={{color:'#636363', fontSize:'16px', }}>It seems that recipients are receiving...</span>
        </div>
        </div>
        {/* right */}
        <div className="justinmaindivrightdiv">
         <span><HiOutlineDotsHorizontal/></span>
         <span style={{fontSize:'22px', borderRadius:'50%', fontWeight: 'bold',}}><BsDot style={{color:'#1bb61b', fontSize:'30px'}}/></span>
         <span style={{marginBottom:'5px'}}>3:13 PM</span>
        </div>
        </div>
        {/* folder gallery */}
        <div className="foldergallerydiv">
        <div style={{display:'flex', gap:'10px', color:'#676969', fontWeight:600}}>
        <span><AiOutlineFolderOpen/></span>
        <span>3</span>
        <span><GrGallery/></span>
        <span>+24</span>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <span><AiFillStar style={{fontSize:'15px', color:'#fba64b'}}/></span>
            <span style={{padding:'4px 7px', backgroundColor:'#c5d9fe', borderRadius:'5px', color:'#659bfb'}}>
                <input type="checkbox" />
                <span>Projects</span>
            </span>
            <span style={{padding:'4px 7px', backgroundColor:'#010c27', borderRadius:'45%', color:'white', fontSize:'12px'}}>+1</span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default EmailMessages
