import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Rating,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [open, setOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    description: '',
    rating: 5
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      console.log('Fetched reviews:', response.data); // Add this to debug
      setReviews(response.data || []); // Ensure we always have an array
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews([]); // Set empty array on error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.description) {
      alert('Please fill all required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/reviews', {
        name: newReview.name,
        description: newReview.description,
        rating: Number(newReview.rating)
      });
      
      console.log('Created review:', response.data); // Add this to debug
      setOpen(false);
      fetchReviews();
      setNewReview({ name: '', description: '', rating: 5 });
    } catch (error) {
      console.error('Error creating review:', error);
      alert('Error creating review. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!id) return; // Guard against undefined id
    
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`);
      fetchReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('Error deleting review. Please try again.');
    }
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Manage Reviews</Typography>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add New Review
        </Button>
      </Box>

      <Grid container spacing={3}>
        {Array.isArray(reviews) && reviews.map((review) => (
          <Grid item xs={12} md={4} key={review?._id || Math.random()}>
            <Card>
              <CardContent>
                <Typography variant="h6">{review?.name || 'Anonymous'}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={Number(review?.rating) || 5} readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                    {new Date(review?.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mt: 2,
                    mb: 2,
                    minHeight: '60px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}
                >
                  {review?.description || review?.comment || 'No description provided'}
                </Typography>
                {review?._id && (
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton 
                      onClick={() => handleDelete(review._id)} 
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Review</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              required
              fullWidth
              label="Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              margin="normal"
            />
            <TextField
              required
              fullWidth
              label="Description"
              multiline
              rows={4}
              value={newReview.description}
              onChange={(e) => setNewReview({ ...newReview, description: e.target.value })}
              margin="normal"
            />
            <Box sx={{ my: 2 }}>
              <Typography component="legend">Rating</Typography>
              <Rating
                value={newReview.rating}
                onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue || 5 })}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminReviews;