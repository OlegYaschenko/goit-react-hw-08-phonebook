import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUserName } from 'redux/authSlice';
import NavigationLogin from 'components/NavigationLogin/NavigationLogin';
import NavigationSignup from 'components/NavigationSignup/NavigationSignup';
import NavigationLogout from 'components/NavigationLogout/NavigationLogout';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userName = useSelector(getUserName);
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
            {!isLoggedIn && (
              <>
                <NavigationLogin />
                <NavigationSignup />
              </>
            )}
            {isLoggedIn && (
              <>
                <h3>{userName}</h3>
                <NavigationLogout />
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
