const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller.js");
const uploadController = require("../controllers/upload.controller");

const multer = require("multer");
const roomModel = require("../models/room.model");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
var upload = multer({ storage: storage, fileFilter: fileFilter });
// Authentification
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut);
// User db
router.post("/friendsOfFriends", userController.friendsOfFriends);
router.put("/profile-picture", userController.updateUserPicture);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.post("/update", upload.single("picture"), userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/room", userController.getroom);
router.post("/accept/:id/:id2", userController.accept);
router.post("/invite/:id/:id2", userController.invite);
router.patch("/desinvitations/:id", userController.desinvitations);

// upload
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

module.exports = router;
