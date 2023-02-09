import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header:React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="header-color">
          <Toolbar>
            <h2>Employee Mangement DashBoard</h2>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;