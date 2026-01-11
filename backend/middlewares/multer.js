import multer from "multer";

//for handling file uploads in memory

const storage = multer.memoryStorage();

export const singleUpload = multer({ storage }).single("file");
