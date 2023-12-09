// Login.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Grid, TextField, Button, Typography } from '@mui/material';

/**
 * Login Component:
 * Allows users to log in by entering a username.
 * Redirects to the home page if the user is already logged in.
 */
const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();

  // Effect to check if the user exists; if yes, then navigate to the home page
  useEffect(() => {
    let doesUserExistOnLogin = localStorage.getItem('userName');
    if (doesUserExistOnLogin) {
      navigate('/home');
    }
  }, [navigate]);

  // User login handler
  function handleUserLogin() {
    let doesUserExist = localStorage.getItem('userName');
    if (!doesUserExist) {
      localStorage.setItem('userName', userName);
      navigate('/home');
    } else if (doesUserExist) {
      navigate('/');
    }
    setUserName('');
  }

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'
    >
      <Grid item xs={10} sm={6} md={4}>
        {/* Paper component for the login form */}
        <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
          {/* Login logo */}
          <img
            src='/images/login-logo.png'
            alt='Login Logo'
            style={{ width: '80%', marginBottom: '20px' }}
          />
          {/* Login title */}
          <Typography variant='h5' gutterBottom>
            Login to Favourite Destination
          </Typography>
          {/* Username input field */}
          <TextField
            id='userName'
            label='User name'
            variant='outlined'
            fullWidth
            margin='normal'
            value={userName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
          {/* Login button */}
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={handleUserLogin}
            disabled={userName === ''}
          >
            Login
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
