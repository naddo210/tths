import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Hajj Packages',
      description: 'Complete Hajj guidance and support with premium accommodation and transportation.',
      image: 'https://images.unsplash.com/photo-1588987281806-f9d790d9681a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhhamp8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'Umrah Services',
      description: 'Flexible Umrah packages tailored to your schedule and preferences.',
      image: 'https://images.unsplash.com/photo-1692566123227-0f68f1b9dac6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFkaW5hfGVufDB8fDB8fHww'
    },
    {
      title: 'Transportation',
      description: 'Comfortable and reliable transportation throughout your journey.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957'
    },
    {
      title: 'Accommodation',
      description: 'Premium hotel accommodations near the holy sites.',
      image: 'https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsfGVufDB8fDB8fHww'
    },
    {
      title: 'Guided Tours',
      description: 'Expert guides to help you perform rituals correctly.',
      image: 'https://images.unsplash.com/photo-1535191162489-aaec838b5221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGd1aWRlfGVufDB8fDB8fHww'
    },
    {
      title: 'Visa Assistance',
      description: 'Complete support for Hajj and Umrah visa processing.',
      image: 'https://images.unsplash.com/photo-1542868727-a1fc9a8a0ab8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHx2aXNhJTIwYXNzaXN0YW5jZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" color="text.secondary" component="h1" gutterBottom>
          Our <span className="awal">Services</span> 
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Comprehensive solutions for your spiritual journey
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;