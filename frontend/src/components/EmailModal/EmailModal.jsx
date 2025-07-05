import React, {useState, useRef} from "react";
import "../EmailModal/EmailModal.css";
import axios from 'axios'
import EmojiPicker from 'emoji-picker-react';
import { RiAttachment2 } from "react-icons/ri";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEditCalendar } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { GoScreenFull } from "react-icons/go";
const defaultSignature = "\n\nRegards,\nSaurabh Kumar";



const EmailModal = ({ show, onClose }) => {
    const [showCc, setShowCc] = useState(false);
     const [showBcc, setShowBcc] = useState(false);
     const [cc, setCc] = useState("");
     const [bcc, setBcc] = useState("");
    const [to, setTo] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const [attachments, setAttachments] = useState([])
    const [isExpanded, setIsExpanded] = useState(false);
    const [showLinkInput, setShowLinkInput] = useState(false);
const [linkText, setLinkText] = useState("");
const [linkUrl, setLinkUrl] = useState("");
const [showCalendar, setShowCalendar] = useState(false);

const [signature, setSignature] = useState(defaultSignature);
const [showSignatureManager, setShowSignatureManager] = useState(false);
const [useSignature, setUseSignature] = useState(true);


    

    

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
                from: "",
                subject,
                body: useSignature && !body.includes(signature) ? body + signature : body,
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
    const toggleExpanded = () => {
  setIsExpanded(prev => !prev);
};
const handleDelete = () => {
  // Clear all input fields
  setTo("");
  setSubject("");
  setBody("");
  setCc("");
  setBcc("");
  setAttachments([]);
  setShowCc(false);
  setShowBcc(false);
  setShowEmojiPicker(false);
  setIsExpanded(false); // Optional: shrink modal back

  // Close the modal
  onClose();
};

  const handleInsertLink = () => {
  if (!linkText || !linkUrl) {
    alert("Please enter both text and URL");
    return;
  }

  // Append formatted link to body
  const formattedLink = `${linkText} (${linkUrl})`;
  setBody(prev => prev + formattedLink);

  // Reset
  setShowLinkInput(false);
  setLinkText("");
  setLinkUrl("");
};


  return (
    <div className="modal-overlay">
     <div className={`email-modal ${isExpanded ? "expanded-modal" : ""}`}>


       
        <div className="modal-header">
  <span>Compose New Email</span>
  <div className="header-actions">
    <button className="btns minus" onClick={onClose}><FaMinus /></button>
    <button className="btns minus" onClick={toggleExpanded}><GoScreenFull /></button>
    <button className="btns minus" onClick={onClose}>✕</button>
  </div>
</div>

        <div className="modal-body">
          <div className="to-field">
            <label >To</label>
            <input type="email" defaultValue="Angela Thomas" value={to} onChange={(e) => setTo(e.target.value)} />
             <span className="cc-bcc" onClick={()=> setShowCc(!showCc)}>Cc</span>
              <span style={{ marginLeft: "10px" }} className="cc-bcc " onClick={()=> setShowBcc(!showBcc)}>Bcc</span>
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
          <div  >
             <label htmlFor="">Subject  </label>
          <input type="text" className="subject" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <textarea className="email-body" placeholder="Compose Email" value={body} onChange={(e) => setBody(e.target.value)} />
          </div>
        </div>
        <div className="modal-footer">
          <div className="footer-icons">
            <button onClick={handleAttachmentClick}><RiAttachment2 /></button>
            <button onClick={() => imageInputRef.current.click()}><HiOutlinePhotograph /></button>
            <button onClick={() => setShowLinkInput(prev => !prev)}><AiOutlineLink /></button>
            <button onClick={() => setShowSignatureManager(prev => !prev)}><MdOutlineModeEdit /></button>
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}><CiFaceSmile /></button>

            {/* for handle input */}
            <input type="file" multiple style={{display:'none'}} ref={fileInputRef} onChange={handleFileChange}/>

            <input type="file" accept="image/*" ref={imageInputRef} style={{display:'none'}} onChange={handleImageChange}/>

            {showEmojiPicker && (
                <div className="emoji-picker">
                    <EmojiPicker onEmojiClick={handleEmojiClick}/>
                </div>
            )}

            {showSignatureManager && (
  <div className="signature-manager">
    <label>Signature:</label>
    <textarea
      rows={3}
      value={signature}
      onChange={(e) => setSignature(e.target.value)}
    />
    <div className="signature-options">
      <label>
        <input
          type="radio"
          name="sig"
          checked={useSignature}
          onChange={() => setUseSignature(true)}
        />
        Use this signature
      </label>
      <label style={{ marginLeft: "20px" }}>
        <input
          type="radio"
          name="sig"
          checked={!useSignature}
          onChange={() => setUseSignature(false)}
        />
        No signature
      </label>
    </div>
  </div>
)}



          </div>
         

          <div>
            <button className="btns" onClick={() => setShowCalendar(prev => !prev)}><MdOutlineEditCalendar /></button>
            <button onClick={handleDelete} className="btns"><RiDeleteBinLine /></button>
             <button className="send-btn" onClick={handleSend}>Send ➜</button>
          </div>
          
        </div>
        {showCalendar && (
  <div className="calendar-popup">
    <input type="date" />
  </div>
)}

         {showLinkInput && (
  <div className="link-input-box">
    <input
      type="text"
      placeholder="Text to display"
      value={linkText}
      onChange={(e) => setLinkText(e.target.value)}
    />
    <input
      type="text"
      placeholder="URL"
      value={linkUrl}
      onChange={(e) => setLinkUrl(e.target.value)}
    />
    <button onClick={handleInsertLink}>Insert</button>
  </div>
)}
      </div>
    </div>
  );
};

export default EmailModal;
