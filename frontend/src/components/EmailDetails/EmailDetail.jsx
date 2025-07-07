import React, { useState, useRef, useEffect } from "react";
import "../EmailDetails/EmailDetail.css";
import { MdExpandMore } from "react-icons/md";
import { FaArrowLeft, FaReply } from "react-icons/fa";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { LuForward, LuReply } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from "emoji-picker-react";
import EmailModal from "../EmailModal/EmailModal.jsx";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import axios from "axios";
import { Link } from "react-router-dom";

const EmailDetail = ({ email, onBack }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [emailshow, setEmailShow] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [emails, setEmails] = useState([]);

  const menuRef = useRef();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiClick = (emojiData) => {
    setBody((prev) => prev + emojiData.emoji);
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

  const handleDeleteSelected = async () => {
    try {
      await axios.post("http://localhost:5000/api/email/delete", {
        ids: selectedEmails,
      });
      setEmails((prev) =>
        prev.filter((email) => !selectedEmails.includes(email._id))
      );
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
    } catch (error) {
      console.error("Failed to delete email", error);
    }
  };

  if (!email) return null;

  return (
    <div className="email-detail">
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            border: "none",
            background: "none",
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={onBack}
        >
          <FaArrowLeft />
        </button>
        <button
          style={{
            border: "none",
            background: "none",
            fontWeight: 800,
            cursor: "pointer",
          }}
          onClick={""}
        >
          <RiDeleteBin6Line />
        </button>
        <span
          style={{ display: "flex", gap: "5px", cursor: "pointer" }}
          onClick={() => setEmailShow(true)}
        >
          <button
            style={{
              border: "none",
              background: "none",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            <LuForward />
          </button>
          <span>Forward</span>
        </span>
      </div>
      <div className="subject-header">
        <div className="subject-left">
          <h2 className="emailsub">{email.subject}</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <span>
              <img src="" alt="img" />
            </span>
            <span>{email.to}</span>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="toggle-meta"
            >
              <MdExpandMore />
            </button>
          </div>
        </div>
        <div className="subject-right">
          <span className="email-time">
            {email.createdAt && !isNaN(new Date(email.createdAt))
              ? new Intl.DateTimeFormat("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }).format(new Date(email.createdAt))
              : "Invalid Date"}
          </span>
          <span className="icon">
            <AiFillStar />
          </span>
          <span
            className="icon"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <GrEmoji />
          </span>
          <span className="icon" onClick={() => setEmailShow(true)}>
            <LuReply />
          </span>
          <EmailModal show={emailshow} onClose={() => setEmailShow(false)} />
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
                  <div onClick={() => setEmailShow(true)}>
                    <FaReply /> Reply
                  </div>
                  <div onClick={() => handleDelete(email._id)}>
                    {" "}
                    <RiDeleteBinLine /> Delete
                  </div>
                </div>
              )}
            </div>
          </span>
        </div>
      </div>
      {showDetails && (
        <div className="email-meta">
          <p
            style={{
              fontSize: "16px",
              color: "gray",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            From:{" "}
            <span style={{ fontSize: "16px", color: "black", fontWeight: 500 }}>
              {email.from}
            </span>
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "gray",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            To:{" "}
            <span style={{ fontSize: "16px", color: "black", fontWeight: 500 }}>
              {email.to.join(",") || "None"}
            </span>
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "gray",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            Cc:{" "}
            <span style={{ fontSize: "16px", color: "black", fontWeight: 500 }}>
              {email.cc?.join(",") || "None"}
            </span>
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "gray",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            Bcc:{" "}
            <span style={{ fontSize: "16px", color: "black", fontWeight: 500 }}>
              {email.bcc?.join(",") || "None"}
            </span>
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "gray",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            Date:{" "}
            <span style={{ fontSize: "16px", color: "black", fontWeight: 500 }}>
              {email.createdAt && !isNaN(new Date(email.createdAt))
                ? new Intl.DateTimeFormat("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).format(new Date(email.createdAt))
                : "Invalid Date"}
            </span>
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "gray",
              fontWeight: 500,
              marginBottom: "5px",
            }}
          >
            Subject:{" "}
            <span style={{ fontSize: "16px", color: "black", fontWeight: 500 }}>
              {email.subject}
            </span>
          </p>
        </div>
      )}
      <div
        className="emailbody"
        dangerouslySetInnerHTML={{ __html: email.body }}
      />

      {/* image and attachment */}
      <div style={{ marginTop: "20px" }}>
        <h4>Attachments</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {/* Images */}
          {email.image?.map((imgPath, index) => {
            const imgUrl = `http://localhost:5000/${imgPath.replace(
              /\\/g,
              "/"
            )}`;
            return (
              <div
                key={index}
                style={{
                  width: "150px",
                  height: "150px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img
                  src={imgUrl}
                  alt={`attachment-${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                  <a href={imgUrl} download className="hover-download-btn" title="Download">
        ⬇
      </a>
                {/* Hover Buttons like Gmail */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "5px",
                    right: "5px",
                    display: "flex",
                    justifyContent: "space-around",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="hover-actions"
                >
                  <a href={imgUrl} download style={{ color: "white" }}>
                    ⬇
                  </a>
                  <a
                    href={imgUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white" }}
                  >
                    👁️
                  </a>
                </div>
              </div>
            );
          })}

          {/* PDFs and Others */}
          {email.attachments?.map((file, index) => {
            const fileUrl = `http://localhost:5000/${file.replace(/\\/g, "/")}`;
            const fileName = file.split("/").pop();
            const isImage = file.match(/\.(jpeg|jpg|png|gif)$/i);
            if (isImage) return null; // skip duplicate image
            return (
              <div
                key={index}
                style={{
                  width: "150px",
                  height: "100px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  backgroundColor: "#f8f8f8",
                }}
              >
                <img src="/pdf-icon.png" alt="pdf" width={40} />
                <span style={{ width: "20px", height: "20px" }}>
                  <Link
                    href={fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    {fileName}
                  </Link>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "20px",
          color: "gray",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            padding: "5px 20px",
          }}
          onClick={() => setEmailShow(true)}
        >
          <LuReply style={{ marginRight: "10px" }} />
          Reply
        </span>
        <span
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            padding: "5px 20px",
          }}
          onClick={() => setEmailShow(true)}
        >
          <LuForward style={{ marginRight: "10px" }} />
          Forward
        </span>
        <span
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            padding: "10px 10px",
            width: "20px",
            height: "20px",
            fontWeight: 500,
          }}
        >
          <GrEmoji style={{ marginRight: "10px", color: "#808080" }} />
        </span>
        {console.log("Email body being sent:", email.body)}
      </div>
      {showEmojiPicker && (
        <div className="emoji-picker">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default EmailDetail;
