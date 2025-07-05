const EmailModal = require ("../models/emailmodels.js");
const nodemailer = require("nodemailer")
const fs = require("fs");
const path = require("path");

 const sendEmail = async(req, res) => { 
    try {
        const {to, cc, bcc, from, subject, body, attachments, date, image, name, starred, bin, type} = req.body;
        
        const email = new EmailModal({to, cc, bcc, from, subject, body, attachments, date, image, name, starred, bin, type: type || "sent"})

        const savedEmail = await email.save();

        const transporter = nodemailer.createTransport({
           host: "smtp.gmail.com",
           port: 465,
           secure: true, // Use SSL
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,

            },
            tls: {
    rejectUnauthorized: false, 
  },
        })

        const mailOptions = {
            from:  from || process.env.EMAIL_USER,
            to: to?.join(","),
            cc: cc?.length ? cc.join(",") : undefined,
            bcc: bcc?.length ? bcc.join(",") : undefined,
            subject,
            text: body,
            attachments: attachments
            ?.filter((file) => fs.existsSync(path.resolve(file))) // ✅ Only keep valid files
            .map((file) => ({ path: path.resolve(file) })),
        }

        await transporter.sendMail(mailOptions)

        
        res.status(201).json({success: true, message:"Email sent", data: savedEmail})
    }catch(error) {
        res.status(500).json({success: false, message: "Failed to send email", error:error.message})
        console.log('ERROR', error)
    }
}

const receiveEmail = async (req, res) => {
    try {
    const emails = await EmailModal.find().sort({createdAt: -1})
    res.status(200).json({success:true, data:emails})
    }catch(error) {
        res.status(500).json({success:false, message: "Failed to fetch emails", error: error.message})
    }
}

const deleteEmail = async (req, res) => {
  try {
    const { ids } = req.body;            // expect an array of Mongo _id strings

    if (!ids || !ids.length) {
      return res.status(400).json({ success: false, message: "No ids provided" });
    }

    const result = await EmailModal.deleteMany({ _id: { $in: ids } });

    return res.status(200).json({
      success: true,
      deletedCount: result.deletedCount,
      message: `${result.deletedCount} email(s) deleted`
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete email(s)", error: error.message });
  }
};


module.exports = {sendEmail, receiveEmail, deleteEmail};
