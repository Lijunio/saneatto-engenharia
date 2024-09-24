// src/components/Contato.tsx
import React from 'react';
import { Box, Grid, Typography, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Importando o ícone do WhatsApp

const Contato: React.FC = () => {
  return (
    <Box id="contato" borderRadius={2}
    sx={{
      background: 'linear-gradient(#ffffff, #688198)',
      p: { xs: 0, sm: 5 },
      mb: 5,
    }}>
      {/* Título centralizado */}
      <Typography variant="h4" sx={{ fontSize: '36px', textAlign: 'center', color: '#083163', fontWeight: 'bold', mb: 5 }}>
        Contato
      </Typography>

      {/* Grid para exibir as informações de contato */}
      <Grid container spacing={5} justifyContent="center">
        {/* E-mail */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <IconButton>
            <EmailIcon fontSize="large" sx={{ color: '#083163' }} />
          </IconButton>
          <Typography variant="body1" sx={{ fontSize: '18px', color: '#083163' }}>
            E-mail: <Link href="mailto:lhr.padua@gmail.com" sx={{ color: '#083163', textDecoration: 'none' }}>lhr.padua@gmail.com</Link>
          </Typography>
        </Grid>

        {/* Telefone com links para WhatsApp */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <IconButton>
            <PhoneIcon fontSize="large" sx={{ color: '#083163' }} />
          </IconButton>
          <Typography variant="body1" sx={{ fontSize: '18px', color: '#083163', mb: 1 }}>
            <IconButton sx={{ color: '#083163' }}>
              <WhatsAppIcon />
            </IconButton>
            <Link
              href="https://wa.me/5531992035184?text=Ol%C3%A1%2C%20estava%20vendo%20seu%20site%20e%20tenho%20algumas%20duvidas."
              target="_blank"
              sx={{ color: '#083163', textDecoration: 'none' }}
            >
              Cel: (31) 99203-5184
            </Link>
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '18px', color: '#083163' }}>
            <IconButton sx={{ color: '#083163' }}>
              <WhatsAppIcon />
            </IconButton>
            <Link
              href="https://wa.me/5531997996022?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Estava%20vendo%20seu%20site%20e%20tenho%20algumas%20duvidas."
              target="_blank"
              sx={{ color: '#083163', textDecoration: 'none' }}
            >
              Cel: (31) 99799-6022
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contato;
