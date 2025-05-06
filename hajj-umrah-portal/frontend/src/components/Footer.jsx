import { Container, Grid, Typography, Link, Box } from '@mui/material';
import SocialShare from './SocialShare';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#1a237e', 
        color: 'white', 
        py: { xs: 6, md: 8 }, 
        mt: 'auto',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        boxSizing: 'border-box'
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{
          px: { xs: 2, sm: 3, md: 8, lg: 12 },
          mx: 'auto'
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 4, md: 8 }} 
          sx={{ 
            maxWidth: '1920px', 
            mx: 'auto',
            mb: { xs: 4, md: 6 }
          }}
        >
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { md: '1.5rem' },
                mb: { md: 3 }
              }}
            >
              MIRZA HAJJ & UMRAH
            </Typography>
            <Typography 
              variant="body2"
              sx={{
                fontSize: { md: '1rem' },
                lineHeight: 1.8
              }}
            >
              Your trusted partner for spiritual journeys.
              Making your Hajj and Umrah experience memorable and meaningful.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{
                fontSize: { md: '1.5rem' },
                mb: { md: 3 }
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ '& a': { fontSize: { md: '1rem' }, py: { md: 0.5 } } }}>
              <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>Home</Link>
              <Link href="/packages" color="inherit" display="block" sx={{ mb: 1 }}>Packages</Link>
              <Link href="/services" color="inherit" display="block" sx={{ mb: 1 }}>Services</Link>
              <Link href="/contact" color="inherit" display="block">Contact</Link>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ maxWidth: '1920px', mx: 'auto', mb: { xs: 4, md: 6 } }}>
          <SocialShare/>
        </Box>
        
        <Box 
          mt={4} 
          sx={{ 
            maxWidth: '1920px', 
            mx: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            pt: { xs: 3, md: 4 }
          }}
        >
          <Typography 
            variant="body2" 
            align="center"
            sx={{ fontSize: { md: '0.9rem' } }}
          >
            © {new Date().getFullYear()} MIRZA HAJJ & UMRAH. All rights reserved.
          </Typography>
          <Typography 
            variant="body2" 
            align="center"
            sx={{ fontSize: { md: '0.9rem' }, mt: 1 }}
          >
            ⊕ Designed by <Link href="https://www.linkedin.com/in/nadeem-salmani-42913934a/" color="inherit" underline="none">Nadeem Salmani</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;