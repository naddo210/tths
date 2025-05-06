import { Container, Grid, Paper, List, ListItem, ListItemText, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        mt: { xs: 8, sm: 9, md: 10 }, // Increased top margin for navbar
        mb: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2, md: 3 }
      }}
    >
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {/* Sidebar */}
        <Grid item xs={12} md={3}>
          <Paper 
            sx={{ 
              p: { xs: 1.5, sm: 2 },
              mb: { xs: 2, md: 0 },
              position: 'sticky',
              top: { xs: 80, md: 88 }, // Adjusted sticky position to account for navbar
              zIndex: 1 // Ensure proper stacking
            }}
          >
            <Typography 
              variant="h6" 
              component="h2" 
              gutterBottom
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 1, sm: 2 }
              }}
            >
              Admin Dashboard
            </Typography>
            <List sx={{ display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
              <ListItem 
                button 
                component={Link} 
                to="/admin/reviews"
                sx={{
                  px: { xs: 1, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  width: { xs: 'auto', md: '100%' },
                  bgcolor: location.pathname === '/admin/reviews' ? 'action.selected' : 'transparent',
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemText 
                  primary="Manage Reviews" 
                  sx={{ 
                    textAlign: { xs: 'center', md: 'left' },
                    '& .MuiTypography-root': {
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }
                  }}
                />
              </ListItem>
              <ListItem 
                button 
                component={Link} 
                to="/admin/videos"
                sx={{
                  px: { xs: 1, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  width: { xs: 'auto', md: '100%' },
                  bgcolor: location.pathname === '/admin/videos' ? 'action.selected' : 'transparent',
                  '&:hover': {
                    bgcolor: 'action.hover'
                  }
                }}
              >
                <ListItemText 
                  primary="Manage Videos" 
                  sx={{ 
                    textAlign: { xs: 'center', md: 'left' },
                    '& .MuiTypography-root': {
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }
                  }}
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper 
            sx={{ 
              p: { xs: 1.5, sm: 2, md: 3 },
              minHeight: { xs: 'auto', md: '70vh' }
            }}
          >
            <Outlet />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;