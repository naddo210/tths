import { useState } from 'react';
import { Container, Typography, Grid, TextField, Button, Box, Paper, Alert, Snackbar } from '@mui/material';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '390c9964-43fb-4a38-83ad-a3d1ee87ff73', // Replace with your Web3Forms access key
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission - Mirza Hajj & Umrah'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setNotification({
          open: true,
          message: 'Message sent successfully! We will get back to you soon.',
          severity: 'success'
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 }, mb: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h3" 
              component="h1" 
              color="primary"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Get in Touch
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 2
              }}
            >
              Have questions about our Hajj or Umrah packages? We're here to help you plan your spiritual journey.
            </Typography>
          </Box>
          
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            noValidate
            sx={{
              '& .MuiTextField-root': {
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ 
                    mt: 2,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      transition: 'transform 0.2s'
                    }
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4,
              height: '100%',
              borderRadius: 2,
              bgcolor: 'background.paper',
              '&:hover': {
                boxShadow: 6,
                transition: 'box-shadow 0.3s'
              }
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 3
              }}
            >
              Contact Information
            </Typography>
            <Box sx={{ '& > *': { mb: 2.5 } }}>
              <Typography variant="body1">
                <strong>Address:</strong> Anas Mansion,56th K-villa Thane(west) 400601
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> info.mirzatours@gmail.com
              </Typography>
              <Typography variant="body1">
                <strong>Phone:</strong> +91 9867952133 / +91 9967049112
              </Typography>
              <Typography variant="body1">
                <strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity}
          sx={{ 
            width: '100%',
            boxShadow: 2
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;