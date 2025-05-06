const asyncHandler = require('express-async-handler');
const Video = require('../models/Video');

const getVideos = asyncHandler(async (req, res) => {
  const videos = await Video.find().sort({ createdAt: -1 });
  res.json(videos);
});

const uploadVideo = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const videoUrl = req.file.path;

  const video = await Video.create({
    title,
    videoUrl
  });

  res.status(201).json(video);
});

const deleteVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (video) {
    await video.remove();
    res.json({ message: 'Video removed' });
  } else {
    res.status(404);
    throw new Error('Video not found');
  }
});

module.exports = {
  getVideos,
  uploadVideo,
  deleteVideo
};
