// src/components/Main.tsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Main: React.FC = () => {
  return (
    <Box
      textAlign="center"
      marginBottom={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >

      {/* Menu suspenso com 3 seções */}
      <Box
        mt={3}
        p={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '5px solid #fff',
          borderRadius: '8px',
          transition: 'border-color 0.3s, background-color 0.3s',
          animation: 'borderEffect 10s linear infinite',
          '@keyframes borderEffect': {
            '0%': { borderColor: '#fff' },
            '50%': { borderColor: '#0d3a6a' },
            '100%': { borderColor: '#fff' },
          },
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {['Quem Somos', 'Serviços', 'Contato'].map((item, index) => (
            <Grid item key={index}>
              <Typography
                component="a"
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                style={{ textDecoration: 'none', color: '#000' }}
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
