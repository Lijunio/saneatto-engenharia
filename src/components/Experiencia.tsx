import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Experiencia: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(#ffffff, #688198)', // Gradiente de fundo
        p: { xs: 3, sm: 5 }, // Espaçamento responsivo
        mb: 5,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'left',
          fontFamily: 'Inter, sans-serif',
          color: '#083163',
          fontWeight: 'bold',
          mb: 3,
        }}
      >
        Nossa filosofia
      </Typography>

      <Grid container spacing={2}>
        {[
          { title: 'Clientes', text: 'Nossa meta é atingir o sucesso dos nossos clientes.' },
          { title: 'Equipe', text: 'Equipe altamente capacitada, composta por profissionais Mestres e Doutores.' },
          { title: 'Tecnologia', text: 'Buscamos novas e aprimoradas tecnologias e metodologias em nossos trabalhos.' },
          { title: 'Cooperação', text: 'Apoiamos a colaboração entre a equipe e consultores externos.' },
          { title: 'Crescimento', text: 'Acreditamos que o crescimento deve ser alinhado às novas tecnologias.' },
        ].map((item, index) => (
          <Grid item xs={12} key={index}>
            <Typography sx={{ fontSize: '18px', fontFamily: 'Inter, sans-serif', color: '#083163' }}>
              <strong>{item.title}:</strong> {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experiencia;
