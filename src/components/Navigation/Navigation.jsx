import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  console.log(`navigation: ${location.pathname}`);
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
            }}
          >
            <Button
              component={RouterLink}
              to="/login"
              key="Log in"
              sx={{
                mx: 1,
                my: 2,
                color: 'white',
                display: 'block',
                border: 1,
                borderRadius: '8px',
              }}
            >
              Sign in
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              key="Sign up"
              sx={{
                mx: 1,
                my: 2,
                color: 'white',
                display: 'block',
                border: 1,
                borderRadius: '8px',
              }}
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
