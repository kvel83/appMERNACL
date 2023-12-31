import { CssBaseline,useTheme} from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import landingImage from '@assets/nombre.png';
import kidsReading from '@assets/kidsReading.png';
import { useState } from 'react';
import LoginForm from './loginForm';
import { imageLeft, kids, landingButtons, landingImages } from '../styles/styles';
import UserRegistration from './registrationForm';



const LandingPage =() => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);


  const handleOpen = () =>{
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenRegistration = () => {
    setOpenRegistration(true);
  };

  const handleCloseRegistration = () => {
    setOpenRegistration(false);
  };



  return (
    <div>
    <CssBaseline/>
      <Container maxWidth="sm">
        <Grid container spacing={2} sx = {landingImages}>
          <Grid item xs={6} sx = {imageLeft}>
            <img src={landingImage} alt="Landing Page Image" className = 'landing-image' style={theme.landingImage}/>
          </Grid>
          <Grid item xs={6} sx = {kids}>
            <img src = {kidsReading} alt = "Niños leyendo" className = 'kids-reading' style={theme.kidsReading}/>
          </Grid>
        </Grid>
        <Grid container sx = {landingButtons}>
            <Button
              variant='contained'
              size = 'large'
              onClick={handleOpen}>
                Iniciar sesión
            </Button>
            <LoginForm open = {open} onClose = {handleClose} />
            <Button
              variant = 'outlined'
              size = 'large'
              onClick={handleOpenRegistration}>
                Crear cuenta
            </Button>
            <UserRegistration open={openRegistration} onClose={handleCloseRegistration} />
        </Grid>
      </Container>
    </div>
  );
};

export default LandingPage;
