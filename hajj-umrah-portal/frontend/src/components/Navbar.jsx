// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import './Navbar.css';

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const menuItems = [
//     { text: 'Home', path: '/' },
//     { text: 'Packages', path: '/packages' },
//     { text: 'Services', path: '/services' },
//     { text: 'Contact', path: '/contact' },
//   ];

//   const drawer = (
//     <List>
//       {menuItems.map((item) => (
//         <ListItem button component={Link} to={item.path} key={item.text} onClick={handleDrawerToggle}>
//           <ListItemText primary={item.text} />
//         </ListItem>
//       ))}
//     </List>
//   );

//   return (
//     <>
//       <AppBar position="fixed" className="navbar">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           <Typography variant="h6" component={Link} to="/" className="logo">
//             MIRZA <span className="arby">HAJJ & UMRAH</span>
//           </Typography>

//           <div className="nav-links">
//             {menuItems.map((item) => (
//               <Button
//                 key={item.text}
//                 component={Link}
//                 to={item.path}
//                 color="inherit"
//               >
//                 {item.text}
//               </Button>
//             ))}
//           </div>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="temporary"
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar; 

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import kb from "../assets/images/mirza-removebg-preview.png"


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Packages', path: '/packages' },
    { text: 'Services', path: '/services' },
    
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={kb} alt="Logo" />
          </Link>
          <h4 className="arby">
            MIRZA HAJJ & UMRAH
          </h4>
        </div>

        <div className="nav-links">
          {menuItems.map((item) => (
            <Link key={item.text} to={item.path}>
              {item.text}
            </Link>
          ))}
        </div>

        <div
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={handleDrawerToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-drawer ${mobileOpen ? "show" : ""}`}>
        {menuItems.map((item) => (
          <Link key={item.text} to={item.path} onClick={handleDrawerToggle}>
            {item.text}
          </Link>
        ))}
      </div>

      <div
        className={`overlay ${mobileOpen ? "show" : ""}`}
        onClick={handleDrawerToggle}></div>
    </>
  );
};

export default Navbar;
