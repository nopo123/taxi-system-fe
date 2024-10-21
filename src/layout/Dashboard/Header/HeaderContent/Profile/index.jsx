import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { Box } from '@mui/system';
import { useAuth } from 'hooks/useAuth';
import Avatar from 'components/@extended/Avatar';
import { useNavigate } from 'react-router';

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (popupState) => {
    logout();
    popupState.close();
  };

  const handleSettings = (popupState) => {
    navigate('/settings');
    popupState.close();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div style={{ width: '100%' }}>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={'/assets/images/users/userImage.png'}
                alt={user?.firstName}
                sx={{ width: 40, height: 40, mr: 2 }}
              />
              <Typography sx={{ pr: 1 }}>
                {user?.firstName} {user?.lastName}
              </Typography>
            </Box>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {user?.email}
              </Typography>
              <hr />
              <Typography
                onClick={() => handleSettings(popupState)}
                variant="body2"
                sx={{
                  mt: 1,
                  cursor: 'pointer',
                  width: '100%',
                  '&:hover': {
                    backgroundColor: 'lightgrey',
                    borderRadius: '4px',
                  },
                }}
              >
                Nastavenia účtu
              </Typography>
              <hr />
              <Typography
                onClick={() => handleLogout(popupState)}
                variant="body2"
                sx={{
                  mt: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'lightgrey',
                    borderRadius: '4px',
                  },
                }}
              >
                Odhlásiť sa
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

