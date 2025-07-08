import React, { useEffect, useState } from 'react';

const Drafts = () => {
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    const savedDraft = localStorage.getItem("emailDraft");
    if (savedDraft) {
      setDraft(JSON.parse(savedDraft));
    }
  }, []);

  if (!draft) {
    return <div>No draft available.</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Draft Email</h2>
      <p><strong>To:</strong> {draft.to}</p>
      {draft.cc && <p><strong>Cc:</strong> {draft.cc}</p>}
      {draft.bcc && <p><strong>Bcc:</strong> {draft.bcc}</p>}
      <p><strong>Subject:</strong> {draft.subject}</p>
      <p><strong>Body:</strong></p>
      <div style={{ whiteSpace: 'pre-wrap', border: '1px solid #ccc', padding: '10px' }}>
        {draft.body}
      </div>
    </div>
  );
};

export default Drafts;
// import React, { useEffect, useState } from 'react';
// import EmailMessages from '../EmailMessages/EmailMessages';

// const Drafts = () => {
//   const [draftEmails, setDraftEmails] = useState([]);

//   useEffect(() => {
//     const savedDrafts = JSON.parse(localStorage.getItem('drafts')) || [];

//     const formatted = savedDrafts.map((email) => {
//       const name = "You"; // Since drafts are composed by the user
//       const initials = name.split(" ").map((word) => word[0]).join("").toUpperCase().slice(0, 2);

//       return {
//         ...email,
//         sender: {
//           name,
//           initials,
//           backgroundColor: "#0288d1" // Blue shade
//         },
//         subject: email.subject || "No Subject",
//         messagePreview: (email.body || "").slice(0, 50) + "...",
//         time: email.date
//           ? new Intl.DateTimeFormat('en-GB', {
//               day: '2-digit',
//               month: 'short',
//               year: 'numeric',
//               hour: '2-digit',
//               minute: '2-digit',
//               hour12: true
//             }).format(new Date(email.date))
//           : 'N/A',
//         status: { dotColor: "grey" },
//         folders: {
//           galleryCount: 0, // You can enhance this later with file support
//         },
//         tags: {
//           starred: false,
//           extraLabelCount: 0
//         }
//       };
//     });

//     setDraftEmails(formatted);
//   }, []);

//   return <EmailMessages filteredEmails={draftEmails} />;
// };

// export default Drafts;
