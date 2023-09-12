import multer from "multer";
import fs from "fs";
import path from "path";

const uploadDestination = "./uploads/";

if (!fs.existsSync(uploadDestination)) {
  fs.mkdirSync(uploadDestination, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDestination);
  },
  filename: function (req, file, cb) {
    const extName = path.extname(file.originalname); 
    const fileName =
      file.originalname
        .replace(extName, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + extName); 
  },
});

const upload = multer({ storage: storage });

export default upload;