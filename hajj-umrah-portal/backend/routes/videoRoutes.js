const express = require('express');
const router = express.Router();
const { getVideos, uploadVideo, deleteVideo } = require('../controllers/videoController');
const upload = require('../middleware/upload');

router.route('/')
  .get(getVideos)
  .post(upload.single('video'), uploadVideo);

router.route('/:id')
  .delete(deleteVideo);

module.exports = router;