const EmailModal = require("../models/emailmodels.js");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const sendEmail = async (req, res) => {
  try {
    const {
      to,
      cc,
      bcc,
      from,
      subject,
      body,
      attachments,
      date,
      image,
      name,
      starred,
      bin,
      type,
    } = req.body;

    const email = new EmailModal({
      to,
      cc,
      bcc,
      from,
      subject,
      body,
      attachments,
      date,
      image,
      name,
      starred,
      bin,
      type: type || "sent",
    });

    const savedEmail = await email.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certs
      },
    });

    const mailOptions = {
      from: from || process.env.EMAIL_USER,
      to: to?.join(","),
      cc: cc?.length ? cc.join(",") : undefined,
      bcc: bcc?.length ? bcc.join(",") : undefined,
      subject,
        //   text: body,
      html: `<div style="white-space: pre-wrap;">${body}</div>`,
      attachments: attachments
        ?.filter((file) => fs.existsSync(path.resolve(file))) // Only keep valid files
        .map((file) => ({ path: path.resolve(file) })),
    };

    await transporter.sendMail(mailOptions);

    res
      .status(201)
      .json({ success: true, message: "Email sent", data: savedEmail });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
    console.log("ERROR", error);
  }
};

const receiveEmail = async (req, res) => {
  try {
    const emails = await EmailModal.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: emails });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch emails",
        error: error.message,
      });
  }
};
const deleteEmail = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id to delete", id);
    const data = await EmailModal.findById(id);
    if (!data) {
      return res
        .status(404)
        .json({ success: false, message: "Record not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "FAiled to delete email",
        error: error.message,
      });
  }
};

module.exports = { sendEmail, receiveEmail, deleteEmail };
