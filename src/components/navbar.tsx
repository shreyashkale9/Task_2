import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Notifications } from '@mui/icons-material';

//Image exists in public folder
const profileImageUrl = '/pro.png';

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar style={{ backgroundColor: '#FFFFFF' }}>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Signature Tab
        </Typography>
        <Avatar alt="Profile Image" src={profileImageUrl} sx={{ width: 40, height: 40, marginRight: 2 }} />
        <IconButton color="inherit" aria-label="notifications" sx={{ height: '100%', '& svg': { fontSize: '2.5rem' } }}>
          <Notifications />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;