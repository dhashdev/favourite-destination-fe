// Header.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaHeart, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import relevant icons
import {} from '../../contexts/favouritesContext';
import './HeaderStyles.css';

const Header = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');

  // Logout User
  const handleUserLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('favouriteCities');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      {/* AppBar component for the header */}
      <AppBar position='static' color='primary'>
        {/* Toolbar component for the content within the header */}
        <Toolbar className='NavBarContainer'>
          {/* Box component to align the title to the left */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Typography component for the app title */}
            <Link to={`/home`} className='NavLink'>
              <Typography variant='h6' component='div'>
                Favourite Destination
              </Typography>
            </Link>
          </Box>

          {/* Box component to align navigation elements to the right */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: 'auto',
              gap: '12px',
            }}
          >
            {/* Link component for navigating to the Favourites page */}
            <Link to='/favourites' className='NavLink'>
              {/* Typography component for the Favourites link */}
              <Typography variant='body1' className='NavItem'>
                <FaHeart /> Favourites
              </Typography>
            </Link>

            {/* Typography component for displaying the user name */}
            <Typography variant='body1' className='UserName'>
              <FaUser /> {userName}
            </Typography>

            {/* Button component for the Logout action */}
            <Button color='inherit' onClick={handleUserLogout}>
              <FaSignOutAlt /> Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
