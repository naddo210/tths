const express = require('express');
const router = express.Router();
const { getReviews, createReview, deleteReview } = require('../controllers/reviewController');
const upload = require('../middleware/upload');

router.route('/')
  .get(getReviews)
  .post(upload.single('reviewImage'), createReview);

router.route('/:id')
  .delete(deleteReview);

module.exports = router;