// src/components/EmailModal.jsx
import React, {useState, useRef} from "react";
import "../EmailModal/EmailModal.css";
import axios from 'axios'
import EmojiPicker from 'emoji-picker-react';

const EmailModal = ({ show, onClose }) => {
    const [showCc, setShowCc] = useState(false);
     const [showBcc, setShowBcc] = useState(false);
     const [cc, setCc] = useState("");
     const [bcc, setBcc] = useState("");

    const [to, setTo] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const [attachments, setAttachments] = useState([])
    

    const fileInputRef = useRef();
    const imageInputRef = useRef();

    // for attachment
    const handleAttachmentClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files)
        const fileNames = files.map((file) => file.name)
        setAttachments([...attachments, ...fileNames])
    }
    // for image
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files || [])
        const imageFiles = files.filter((file) => file.type.startsWith("image/"))
        const fileNames = imageFiles.map((file) => file.name) 
            setAttachments((prev) => [...prev, ...fileNames])
    }

    // for emoji
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiClick = (emojiData) => {
  setBody((prev) => prev + emojiData.emoji);
};


    if(!show) return null;

    const handleSend = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/email/send", {
                to:[to], //send an array
                from: "akashkumar5494@gmail.com",
                subject,
                body,
                cc:cc ? [cc] : [],
                bcc:bcc ? [bcc] : [],
                attachments,
                image:"",
                name:"You",
                starred:false,
                bin: false,
                type: "sent"
            })
            alert("Email sent successfully!")
            onClose();
        }catch(error) {
            console.error("Error sending email", error)
            alert("Failed to send email")
        }
    }
  return (
    <div className="modal-overlay">
      <div className="email-modal">
        <div className="modal-header">
          <span>Compose New Email</span>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="to-field">
            <label>To</label>
            <input type="email" defaultValue="Angela Thomas" value={to} onChange={(e) => setTo(e.target.value)} />
             <span className="cc-bcc" onClick={()=> setShowCc(!showCc)}>Cc</span>
              <span style={{ marginLeft: "10px" }} className="cc-bcc" onClick={()=> setShowBcc(!showBcc)}>Bcc</span>
          </div>
          {/* for cc */}
          {showCc && (
            <div className="to-field">
                <label htmlFor="">Cc</label>
                <input type="email" placeholder="Add Cc" value={cc} onChange={(e) => setCc(e.target.value)}/>
            </div>
          ) }
          {/* for Bcc */}
          {showBcc && (
            <div className="to-field">
                <label htmlFor="">Bcc</label>
                <input type="email" placeholder="Add Bcc" value={bcc} onChange={(e) => setBcc(e.target.value)}/>
            </div>
          ) }
          <div style={{width:'90%'}}>
          <input type="text" className="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea className="email-body" placeholder="Compose Email" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
        </div>
        <div className="modal-footer">
          <div className="footer-icons">
            <button onClick={handleAttachmentClick}>📎</button>
            <button onClick={() => imageInputRef.current.click()}>📷</button>
            <button>📁</button>
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>

            {/* for handle input */}
            <input type="file" multiple style={{display:'none'}} ref={fileInputRef} onChange={handleFileChange}/>

            <input type="file" accept="image/*" ref={imageInputRef} style={{display:'none'}} onChange={handleImageChange}/>

            {showEmojiPicker && (
                <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={handleEmojiClick}/>
                </div>
            )}
          </div>
          <button className="send-btn" onClick={handleSend}>Send ➜</button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
