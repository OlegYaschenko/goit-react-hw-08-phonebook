import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useLogoutUserMutation } from 'redux/authApi';

function NavigationLogout() {
  const navigate = useNavigate();
  const [logout, isSuccess] = useLogoutUserMutation();

  const handleLogout = async () => {
    await logout();
    if (isSuccess) {
      navigate('/login', { replace: true });
    }
  };

  return (
    <Button
      onClick={handleLogout}
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
      Logout
    </Button>
  );
}

export default NavigationLogout;
