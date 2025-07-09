import React, { useEffect, useState } from "react";
import EmailMessages from "../EmailMessages/EmailMessages";

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("emailDrafts");
    if (saved) {
      const parsedDrafts = JSON.parse(saved);
      const formatted = parsedDrafts.map((email) => {
        const name = "You";
        const initials = "Y";
        return {
          ...email,
          sender: email.sender || { name, initials, backgroundColor: "#42a5f5" },
          subject: email.subject || "(No Subject)",
          messagePreview: (email.body || "").slice(0, 50) + "...",
          time: email.timestamp
            ? new Intl.DateTimeFormat('en-GB', {
              day: '2-digit', month: 'short', year: 'numeric',
              hour: '2-digit', minute: '2-digit', hour12: true
            }).format(new Date(email.timestamp))
            : "Unknown Time",
          status: { dotColor: "orange" },
          folders: { galleryCount: 0 },
          tags: {
            starred: false,
            extraLabelCount: 0
          },
          type: "draft"
        };
      });
      setDrafts(formatted);
    }
  }, []);

  return <EmailMessages filteredEmails={drafts} isDraftPage={true} />;
};

export default Drafts;
