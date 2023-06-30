/* eslint-disable @typescript-eslint/no-unused-vars */
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import logo from '../assets/logo.png'
import { useTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const pages = ['Iniciar sesión', 'Crear cuenta'];

function ResponsiveAppBar() {
  const theme = useTheme();

  const handleClickNavMenu = () =>{
    alert("hice click");
  }

  return (
    <>
     <CssBaseline/>
     <AppBar position="fixed" className = 'full-app-navbar'>
       <Toolbar disableGutters>
         <img src={logo} alt='Logo' className='logo-image' style={theme.logoImage}/>
         <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end' }}>
             <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', alignContent: 'flex-end', mr: 2} }}>
               {pages.map((page) => (
                 <Button
                     key={page}
                     onClick = {handleClickNavMenu}
                     sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                     {page}
                 </Button>
               ))}
           </Box>
         </Box>
       </Toolbar>
     </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
