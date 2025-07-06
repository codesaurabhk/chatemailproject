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
<<<<<<< HEAD
import EmailData from "../EmailMessages/emailData.json"
import { useEffect, useRef } from "react";
=======
// import EmailData from "../EmailMessages/emailData.json"
import { useEffect } from "react";
>>>>>>> c7429722a9b3abc1d498ba21d7353a7838f06b9c
import axios from "axios";
import EmailDetail from "../EmailDetails/EmailDetail";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaReply } from "react-icons/fa";



const EmailMessages = () => {
  const [search, setSearch] = useState("");
<<<<<<< HEAD
  const [emails, setEmails] = useState([])
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [menuOpenId, setMenuOpenId] = useState(null);


  const menuRef = useRef();
=======
  const [emails, setEmails] = useState([]);

  const [selectedEmails, setSelectedEmails] = useState(null)

>>>>>>> c7429722a9b3abc1d498ba21d7353a7838f06b9c

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/email/receive")
        const formattedData = res.data.data.map((email) => {
          const name = email.name;
          const initials = name.split(" ").map((word) => word[0]).join("").toUpperCase().slice(0, 2);
          return {
            ...email,
            sender: {
              name,
              initials,
              backgroundColor: "#5e35b1"
            },
            subject: email.subject,
            messagePreview: email.body.slice(0, 50) + "...",  //trim preview
            time: new Intl.DateTimeFormat('en-GB', {
              day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
            }).format(new Date(email.createdAt)),
            status: { dotColor: "red" },
            folders: {
              galleryCount: email.attachments?.length || 0,
            },
            tags: {
              starred: email.starred,
              labels: [
                {
                  name: "External",
                  color: "#ffa726",
                  backgroundColor: "#fff3e0"
                }
              ],
              extraLabelCount: 0
            }
          }
        });
        setEmails(formattedData)
        console.log('formattedDataemails', formattedData)
      } catch (error) {
        console.error("Failed to fetch emails", error)
      }
    }
    fetchEmail();
  }, []);
<<<<<<< HEAD
  const handleDeleteSelected = async () => {
    try {
      await axios.post("http://localhost:5000/api/email/delete", {
        ids: selectedEmails
      });
      setEmails(prev => prev.filter(email => !selectedEmails.includes(email._id)));
      setSelectedEmails([]);
    } catch (error) {
      console.error("Failed to delete emails", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost:5000/api/email/delete", { ids: [id] });
      setEmails((prev) => prev.filter((email) => email._id !== id));
      setMenuOpenId(null);
    } catch (err) {
      console.error("Failed to delete email", err);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
=======
>>>>>>> c7429722a9b3abc1d498ba21d7353a7838f06b9c

  const handleBackToInbox = () => {
    setSelectedEmail(null)
  }
  return (
    <div className="mainemailmessage">
      <div className="header">
        {/* inbox */}
        <div className="inbox">
          <span style={{ color: "black", fontSize: "18px", fontWeight: 600 }}>
            Inbox
          </span>
          <span className="twothreemail">
            {emails.length}Emails{" "}
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

            <span>
              {selectedEmails.length > 0 && (
                <div className="selectdt">
                  <span>{selectedEmails.length} selected</span>
                  <button className="dt-icon" onClick={handleDeleteSelected} style={{ marginLeft: "20px" }}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              )}</span> </span>

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
        {selectedEmails ? (
          <EmailDetail email={selectedEmails} onBack={handleBackToInbox} />
        ) : (
          emails.filter((email) =>
            email.sender.name.toLowerCase().includes(search.toLowerCase()) ||
            email.subject.toLowerCase().includes(search.toLowerCase()) ||
            email.messagePreview.toLowerCase().includes(search.toLowerCase())
          ).map((email) => (
            <div className="justinmaindiv" key={email._id} onClick={() => setSelectedEmail(email)}>
              <div className="justinleftrightmaindiv" style={{ cursor: 'pointer' }}>
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
                        width: "40px", height: "40px", display: 'flex', alignItems: 'center', justifyContent: 'center', objectFit: 'contain'
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
                      {email.to[0]}
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
<<<<<<< HEAD
              {/* right */}
              <div className="justinmaindivrightdiv">
                <span onClick={() => setMenuOpenId(email._id)}>
                  <div style={{ position: "relative" }}>
                    <span
                      onClick={() =>
                        setMenuOpenId(menuOpenId === email._id ? null : email._id)
                      }
                      className="three-dot-icon"
                    >
                      <HiOutlineDotsHorizontal />
                    </span>

                    {menuOpenId === email._id && (
                      <div className="custom-popup-menu" ref={menuRef}>
                        <div onClick={() => handleReply(email)}><FaReply /> Reply</div>
                        <div onClick={() => handleDelete(email._id)}> <RiDeleteBinLine /> Delete</div>
                      </div>
                    )}
                  </div>

                </span>



                <span
=======
              {/* folder gallery */}
              <div className="foldergallerydiv">
                <div
>>>>>>> c7429722a9b3abc1d498ba21d7353a7838f06b9c
                  style={{
                    display: "flex",
                    gap: "10px",
                    color: "#676969",
                    fontWeight: 600,
                  }}
                >
<<<<<<< HEAD

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
                <span>{email.attachments.length}</span>
                <span>
                  <GrGallery />
                </span>
                <span>{email.image?.length}</span>
                {console.log('imgg length', email.image?.length)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {email.tags.starred && (
=======
>>>>>>> c7429722a9b3abc1d498ba21d7353a7838f06b9c
                  <span>
                    <AiOutlineFolderOpen />
                  </span>
                  <span>{email.attachments?.length}</span>
                  <span>
                    <GrGallery />
                  </span>
                  <span>{email.image?.length}</span>
                  {console.log('imgg length', email.image?.length)}
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
          ))
        )}
      </>
    </div>
  );
};

export default EmailMessages;
