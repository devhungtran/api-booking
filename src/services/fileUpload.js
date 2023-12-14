const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("file");

const uploadFile = async (file) => {
  try {
    if (!file) {
      res.status(500).json({
        status: false,
        message: "Vui lòng nhập file",
      });
    }

    const uploadMiddleware = util.promisify(upload.single("file"));
    await uploadMiddleware(file);

    console.log("File uploaded:", file.filename);
    const fileName = file.filename;

    // Continue with further processing if needed

    return { success: true, message: "File uploaded successfully.", fileName };
  } catch (error) {
    console.error("Error during file upload:", error);
    return { success: false, message: "File upload failed." };
  }
};

module.exports = uploadFile;
