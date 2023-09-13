const express = require("express")
const router = express.Router();
const {uploadFile , downloadFile} = require("../controllers/fileController.js")
const upload = require("../utils/uploads.js")

router.post("/upload" , upload.single('file'),uploadFile)
router.get("/file/:fileId" ,downloadFile)


module.exports = router


