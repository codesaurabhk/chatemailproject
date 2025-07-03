const express = require ('express');
const {sendEmail, receiveEmail} = require ("../controllers/emailcontroller.js")
const emailrouter = express.Router();

emailrouter.post("/send", sendEmail);
emailrouter.get("/receive", receiveEmail)

module.exports = emailrouter;

