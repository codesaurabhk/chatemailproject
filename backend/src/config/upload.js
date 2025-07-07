const multer = require("multer")
const path = require("path")

// configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename:(req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`
        cb(null, uniqueName)
    }
});

// File filter 
const fileFilter = (req, file, cb) => {
    cb(null, true)
};

const upload = multer({storage, fileFilter})
module.exports = upload