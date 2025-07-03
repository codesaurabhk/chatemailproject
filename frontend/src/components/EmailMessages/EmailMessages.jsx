// import React, { useState } from "react";
// import "../EmailMessages/EmailMessages.css";
// import { IoIosSearch, IoMdSettings } from "react-icons/io";
// import { RiFilterOffLine } from "react-icons/ri";
// import { BiRefresh } from "react-icons/bi";
// import { AiOutlineSetting } from "react-icons/ai";
// import { BsDot } from "react-icons/bs";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import { AiOutlineFolderOpen } from "react-icons/ai";
// import { GrGallery } from "react-icons/gr";
// import { AiFillStar } from "react-icons/ai";
// import EmailData from "../EmailMessages/emailData.json"
// import { useEffect } from "react";
// import axios from "axios";

// const EmailMessages = () => {
//     const [search, setSearch] = useState("");
//     const [emails, setEmails] = useState([])

//     useEffect(() => {
//       const fetchEmail = async () => {
//         try {
//           const res = await axios.get("http://localhost:5000/api/email/receive")
//           setEmails(res.data.data)
//         }catch(error) {
//           console.error("Failed to fetch emails", error)
//         }
//       }
//       fetchEmail();
//     }, []);

//   return (
//     <div className="mainemailmessage">
//       <div className="header">
//         {/* inbox */}
//         <div className="inbox">
//           <span style={{ color: "black", fontSize: "18px", fontWeight: 600 }}>
//             Inbox
//           </span>
//           <span className="twothreemail">
//             2345 Emails{" "}
//             <span
//               style={{
//                 fontSize: "22px",
//                 borderRadius: "50%",
//                 fontWeight: "bold",
//               }}
//             >
//               <BsDot style={{ color: "#fba64b", marginTop: "10px" }} />
//             </span>{" "}
//             56 Unread
//           </span>
//         </div>
//         {/* filter */}
//         <div className="filter">
//           <span className="searchinputdiv">
//             <span style={{ marginTop: "5px" }}>
//               <IoIosSearch />
//             </span>
//             <input
//               className="searchtext"
//               type="text"
//               placeholder="Search Email"
//               value={search} onChange={(e) => setSearch(e.target.value)}
//             />
//           </span>
//           <span className="settingrefreshdiv">
//             <RiFilterOffLine />
//             <AiOutlineSetting />
//             <BiRefresh onClick={() => window.location.reload()} />
//           </span>
//         </div>
//       </div>
//       {/* email message div */}
//       <>
//       {emails.filter((email) => 
//       email.name.toLowerCase().includes(search.toLowerCase()) || 
//       email.subject.toLowerCase().includes(search.toLowerCase()) ||
//       email.body.toLowerCase().includes(search.toLowerCase())
//       ).map((email) => (
//       <div className="justinmaindiv">
//         <div className="justinleftrightmaindiv">
//           {/* left */}
//           <div className="justinmaindivleftdiv">
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <input
//                 type="checkbox"
//                 style={{ width: "18px", height: "18px", borderRadius: "5px" }}
//               />
//               <span
//                 style={{
//                   backgroundColor: '',
//                   color: "white",
//                   borderRadius: "50%",
//                   width:"40px", height:"40px", display:'flex', alignItems:'center', justifyContent:'center', objectFit:'contain'
//                 }}
//               >
//                 {}
//               </span>
//             </div>
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <span
//                 style={{
//                   color: "",
//                   fontSize: "18px",
//                   fontWeight: 600,
//                   marginBottom: "5px",
//                 }}
//               >
//                 {email.name}
//               </span>
//               <span style={{ color: "#636363", fontSize: "16px" }}>
//                 {email.subject}
//               </span>
//               <span style={{ color: "#636363", fontSize: "16px" }}>
//                {email.body}
//               </span>
//             </div>
//           </div>
//           {/* right */}
//           <div className="justinmaindivrightdiv">
//             <span>
//               <HiOutlineDotsHorizontal />
//             </span>
//             <span
//               style={{
//                 fontSize: "22px",
//                 borderRadius: "50%",
//                 fontWeight: "bold",
//               }}
//             >
//               <BsDot style={{ color: 'red', fontSize: "30px" }} />
//             </span>
//             <span style={{ marginBottom: "5px" }}>{}</span>
//           </div>
//         </div>
//         {/* folder gallery */}
//         <div className="foldergallerydiv">
//           <div
//             style={{
//               display: "flex",
//               gap: "10px",
//               color: "#676969",
//               fontWeight: 600,
//             }}
//           >
//             <span>
//               <AiOutlineFolderOpen />
//             </span>
//             <span>3</span>
//             <span>
//               <GrGallery />
//             </span>
//             <span>{}</span>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//             <span>
//               <AiFillStar style={{ fontSize: "15px", color: "#fba64b" }} />
//             </span>
//             <span
//               style={{
//                 padding: "4px 7px",
//                 backgroundColor: '',
//                 borderRadius: "5px",
//                 color: '',
//               }}
//             >
//               <input type="checkbox" />
//               <span>{email.name}</span>
//             </span>
//             <span
//               style={{
//                 padding: "4px 7px",
//                 backgroundColor: "#010c27",
//                 borderRadius: "45%",
//                 color: "white",
//                 fontSize: "12px",
//               }}
//             >
//               +{}
//             </span>
//           </div>
//         </div>
//       </div>
//       ))}
//       </>   
//     </div>
//   );
// };

// export default EmailMessages;











import React, { useState } from "react";
import "../EmailMessages/EmailMessages.css";
import { IoIosSearch, IoMdSettings } from "react-icons/io";
import { RiFilterOffLine } from "react-icons/ri";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { AiFillStar } from "react-icons/ai";
import EmailData from "../EmailMessages/emailData.json"
import { useEffect } from "react";
import axios from "axios";

const EmailMessages = () => {
    const [search, setSearch] = useState("");
    const [emails, setEmails] = useState([])

    useEffect(() => {
      const fetchEmail = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/email/receive")
          setEmails(res.data.data)
        }catch(error) {
          console.error("Failed to fetch emails", error)
        }
      }
      fetchEmail();
    }, []);

  return (
    <div className="mainemailmessage">
      <div className="header">
        {/* inbox */}
        <div className="inbox">
          <span style={{ color: "black", fontSize: "18px", fontWeight: 600 }}>
            Inbox
          </span>
          <span className="twothreemail">
            2345 Emails{" "}
            <span
              style={{
                fontSize: "22px",
                borderRadius: "50%",
                fontWeight: "bold",
              }}
            >
              <BsDot style={{ color: "#fba64b", marginTop: "10px" }} />
            </span>{" "}
            56 Unread
          </span>
        </div>
        {/* filter */}
        <div className="filter">
          <span className="searchinputdiv">
            <span style={{ marginTop: "5px" }}>
              <IoIosSearch />
            </span>
            <input
              className="searchtext"
              type="text"
              placeholder="Search Email"
              value={search} onChange={(e) => setSearch(e.target.value)}
            />
          </span>
          <span className="settingrefreshdiv">
            <RiFilterOffLine />
            <AiOutlineSetting />
            <BiRefresh onClick={() => window.location.reload()} />
          </span>
        </div>
      </div>
      {/* email message div */}
      <>
      {EmailData.filter((email) => 
      email.sender.name.toLowerCase().includes(search.toLowerCase()) || 
      email.subject.toLowerCase().includes(search.toLowerCase()) ||
      email.messagePreview.toLowerCase().includes(search.toLowerCase())
      ).map((email) => (
      <div className="justinmaindiv">
        <div className="justinleftrightmaindiv">
          {/* left */}
          <div className="justinmaindivleftdiv">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                style={{ width: "18px", height: "18px", borderRadius: "5px" }}
              />
              <span
                style={{
                  backgroundColor: email.sender.backgroundColor,
                  color: "white",
                  borderRadius: "50%",
                  width:"40px", height:"40px", display:'flex', alignItems:'center', justifyContent:'center', objectFit:'contain'
                }}
              >
                {email.sender.initials}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "",
                  fontSize: "18px",
                  fontWeight: 600,
                  marginBottom: "5px",
                }}
              >
                {email.sender.name}
              </span>
              <span style={{ color: "#636363", fontSize: "16px" }}>
                {email.subject}
              </span>
              <span style={{ color: "#636363", fontSize: "16px" }}>
               {email.messagePreview}
              </span>
            </div>
          </div>
          {/* right */}
          <div className="justinmaindivrightdiv">
            <span>
              <HiOutlineDotsHorizontal />
            </span>
            <span
              style={{
                fontSize: "22px",
                borderRadius: "50%",
                fontWeight: "bold",
              }}
            >
              <BsDot style={{ color: email.status.dotColor, fontSize: "30px" }} />
            </span>
            <span style={{ marginBottom: "5px" }}>{email.time}</span>
          </div>
        </div>
        {/* folder gallery */}
        <div className="foldergallerydiv">
          <div
            style={{
              display: "flex",
              gap: "10px",
              color: "#676969",
              fontWeight: 600,
            }}
          >
            <span>
              <AiOutlineFolderOpen />
            </span>
            <span>3</span>
            <span>
              <GrGallery />
            </span>
            <span>{email.folders.galleryCount}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {email.tags.starred && (
            <span>
              <AiFillStar style={{ fontSize: "15px", color: "#fba64b" }} />
            </span>
            )}
            {email.tags.labels.map((label, index) => (
            <span key={index}
              style={{
                padding: "4px 7px",
                backgroundColor: label.backgroundColor,
                borderRadius: "5px",
                color: label.color,
              }}
            >
              <input type="checkbox" />
              <span>{label.name}</span>
            </span>
            ))}
            <span
              style={{
                padding: "4px 7px",
                backgroundColor: "#010c27",
                borderRadius: "45%",
                color: "white",
                fontSize: "12px",
              }}
            >
              +{email.tags.extraLabelCount}
            </span>
          </div>
        </div>
      </div>
      ))}
      </>   
    </div>
  );
};

export default EmailMessages;
