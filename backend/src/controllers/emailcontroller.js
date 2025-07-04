const EmailModal = require ("../models/emailmodels.js");

 const sendEmail = async(req, res) => {
    try {
        const {to, cc, bcc, from, subject, body, attachments, date, image, name, starred, bin, type} = req.body;
        
        const email = new EmailModal({to, cc, bcc, from, subject, body, attachments, date, image, name, starred, bin, type: type || "sent"})

        const savedEmail = await email.save();
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
    const id = req.params.id;
    console.log('id to delete', id)
    const data = await EmailModal.findById(id)
    if(!data) {
        return res.status(404).json({success: false, message: "Record not found"})
    }
    }catch(error) {
    return res.json({})
    }
}

module.exports = {sendEmail, receiveEmail, deleteEmail};
