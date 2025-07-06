import React, { useState } from 'react'
import '../EmailDetails/EmailDetail.css'
import { MdExpandMore } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuForward, LuReply } from "react-icons/lu";
import { AiFillStar } from 'react-icons/ai';
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from 'emoji-picker-react';


const EmailDetail = ({ email, onBack }) => {
    const [showDetails, setShowDetails] = useState(false);


    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiClick = (emojiData) => {
        setBody((prev) => prev + emojiData.emoji);
    };
    if (!email) return null;

    return (
        <div className='email-detail'>
            <div style={{ display: 'flex', gap: '20px' }}>
                <button style={{ border: 'none', background: 'none', fontWeight: 800, cursor: 'pointer' }} onClick={onBack}><FaArrowLeft /></button>
                <button style={{ border: 'none', background: 'none', fontWeight: 800, cursor: 'pointer' }} onClick={''}><RiDeleteBin6Line /></button>
                <span style={{ display: 'flex', gap: '5px', cursor: 'pointer' }} onClick={''}>
                    <button style={{ border: 'none', background: 'none', fontWeight: 800, cursor: 'pointer' }}><LuForward /></button>
                    <span>Forward</span>
                </span>
            </div>
            <div className='subject-header'>
                <div className="subject-left">
                    <h2 className='emailsub'>{email.subject}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <span><img src="" alt="img" /></span>
                        <span>{email.to}</span>
                        <button onClick={() => setShowDetails(!showDetails)} className='toggle-meta'>
                            <MdExpandMore />
                        </button>
                    </div>
                </div>
                <div className="subject-right">
                    <span className="email-time">{email.createdAt && !isNaN(new Date(email.createdAt)) ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date(email.createdAt)): 'Invalid Date'}</span>
                    <span className="icon"><AiFillStar /></span>
                    <span className="icon" onClick={() => setShowEmojiPicker(!showEmojiPicker)}><GrEmoji /></span>
                    <span className="icon"><LuReply /></span>
                    <span className="icon">⋮</span>

                </div>
            </div>
            {showDetails && (
                <div className="email-meta">
                    <p style={{ fontSize: '16px', color: 'gray', fontWeight: 500, marginBottom: '5px' }}>From: <span style={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>{email.from}</span></p>
                    <p style={{ fontSize: '16px', color: 'gray', fontWeight: 500, marginBottom: '5px' }}>To: <span style={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>{email.to.join(",") || "None"}</span></p>
                    <p style={{ fontSize: '16px', color: 'gray', fontWeight: 500, marginBottom: '5px' }}>Cc: <span style={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>{email.cc?.join(",") || "None"}</span></p>
                    <p style={{ fontSize: '16px', color: 'gray', fontWeight: 500, marginBottom: '5px' }}>Bcc: <span style={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>{email.bcc?.join(",") || "None"}</span></p>
                    <p style={{ fontSize: '16px', color: 'gray', fontWeight: 500, marginBottom: '5px' }}>Date: <span style={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>{email.createdAt && !isNaN(new Date(email.createdAt)) ? new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(email.createdAt)): 'Invalid Date'}</span></p>
                    <p style={{ fontSize: '16px', color: 'gray', fontWeight: 500, marginBottom: '5px' }}>Subject: <span style={{ fontSize: '16px', color: 'black', fontWeight: 500 }}>{email.subject}</span></p>
                </div>
            )}
            <div className='emailbody' dangerouslySetInnerHTML={{ __html: email.body }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px', color: 'gray', cursor: 'pointer' }}>
                <span style={{ border: '1px solid black', borderRadius: '20px', padding: '5px 20px' }}><LuReply style={{ marginRight: '10px' }} />Reply</span>
                <span style={{ border: '1px solid black', borderRadius: '20px', padding: '5px 20px' }}><LuForward style={{ marginRight: '10px' }} />Forward</span>
                <span onClick={() => setShowEmojiPicker(!showEmojiPicker)} style={{ border: '1px solid black', borderRadius: '50%', padding: '10px 10px', width: '35px', height: '35px', fontWeight: 500 }}><GrEmoji style={{ marginRight: '10px', color: '#808080' }} /></span>
                {console.log("Email body being sent:", email.body)}
            </div>
            {showEmojiPicker && (
                <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
            )}
        </div>
    )
}

export default EmailDetail
