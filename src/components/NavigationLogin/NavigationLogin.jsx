import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

function NavigationLogin() {
  return (
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
  );
}

export default NavigationLogin;
