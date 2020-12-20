const PostModel = require("../models/post.model");
const { uploadErrors } = require("../utils/errors.utils");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const multer = require("multer");

module.exports.postMessage = (req, res, next) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    picture: req.file !== null ? "./upload/" + req.file.originalname : "",
    video: req.body.video,
    likers: [],
    comments: []
  });

  newPost.save();
  res.json({ success: true });
};
