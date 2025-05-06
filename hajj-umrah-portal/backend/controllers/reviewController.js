const asyncHandler = require('express-async-handler');
const Review = require('../models/Review');

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

const createReview = asyncHandler(async (req, res) => {
  const { name, description, rating } = req.body;

  const review = await Review.create({
    name,
    description,
    rating: Number(rating)
  });

  res.status(201).json(review);
});

const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (review) {
    await review.remove();
    res.json({ message: 'Review removed' });
  } else {
    res.status(404);
    throw new Error('Review not found');
  }
});

module.exports = {
  getReviews,
  createReview,
  deleteReview
};