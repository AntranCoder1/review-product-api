import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./uploads/tmp");
  },
  filename(req, file, cb) {
    const typeArr = file.mimetype.split("/");
    cb(null, Date.now() + "." + typeArr[1]);
  },
});

export let upload = multer({ storage });
