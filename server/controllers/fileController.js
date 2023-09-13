const File = require("../models/file.js");

const uploadFile = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const downloadFile = async (req, res) => { 
  try {
    const file = await File.findById(req.params.fileId);
    file.downloadContent++;
    await file.save();
    res.download(file.path , file.name)
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { uploadFile, downloadFile };
