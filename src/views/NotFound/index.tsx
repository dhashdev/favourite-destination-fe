import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
  return (
    <Container>
      <Box textAlign='center' margin='20px'>
        <Typography variant='h2'>Not Found :(</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
