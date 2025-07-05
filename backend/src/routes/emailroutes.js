const express = require ('express');
const {sendEmail, receiveEmail, deleteEmail} = require ("../controllers/emailcontroller.js")
const emailrouter = express.Router();

emailrouter.post("/send", sendEmail);
emailrouter.get("/receive", receiveEmail);
emailrouter.post("/delete",deleteEmail);

module.exports = emailrouter;

