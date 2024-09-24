import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const Values: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(1); 
  const totalCards = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev < totalCards ? prev + 1 : 1));
    }, 15000); 

    return () => clearInterval(interval); 
  }, []);

  const handleNext = () => {
    setCurrentCard((prev) => (prev < totalCards ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev > 1 ? prev - 1 : totalCards));
  };

  return (
    <Box
      id="quem-somos"
      borderRadius={2}
      sx={{
        p: { xs: 0, sm: 5 },
        mb: 5,
      }}
    >
      {/* Primeiro Card: Quem somos */}
      {currentCard === 1 && (
        <Card sx={{ marginBottom: 4, border: '1px solid #ccc', padding: 2, background: 'linear-gradient(#ffffff, #688198)' }}>
          <CardContent>
            <Typography variant="h4" color="#083163" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
              Quem somos
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: '30px' }}>
              <Grid item xs={12} sm={6}>
                <img
                  src="/imagens/1.jpg"
                  alt="Quem somos"
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography sx={{ fontSize: '16px', textAlign: 'left' }}>
                  A Saneatto Engenharia está à disposição de nossos clientes contando com os mais amplos conhecimentos e a mais completa experiência, 
                  garantindo-lhes a assessoria correta, onde e quando mais necessitam. Com uma expertise excepcional na área de Recursos Hídricos, traz ao mercado industrial e da mineração, 
                  toda sua capacidade e conhecimento adquirido, dirigida por profissionais que atuam na área a mais de 20 anos, entregando projetos de qualidade ímpar, com uso de ferramental 
                  tecnológico de ponta.
                </Typography>
                <Typography sx={{ fontSize: '16px', textAlign: 'left', marginTop: '10px' }}>
                  A Saneatto vem ao longo dos anos proporcionando aos seus clientes as mais diversas soluções às necessidades dos 
                  clientes nas áreas de recursos hídricos, meio ambiente e geotecnia, com capacidade técnica pioneira adquirida internacionalmente por seus profissionais.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#f2f2f2',
                      color: 'black',
                      transition: 'background-color 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#688198',
                        transform: 'scale(1.05)', 
                      },
                    }}
                    onClick={handleNext} 
                  >
                    Próximo
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {/* Segundo Card: Missão, Visão e Valores */}
      {currentCard === 2 && (
        <Card sx={{ marginBottom: 4, border: '1px solid #ccc', padding: 2, background: 'linear-gradient(#ffffff, #688198)'}}>
          <CardContent>
            <Typography variant="h4" color="#083163" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
              Nossa Filosofia
            </Typography>
            <Grid container spacing={2}>
              {[ 
                { title: 'Missão', text: 'Nossa missão é proporcionar soluções de engenharia inovadoras, eficientes, utilizando o estado da arte em tecnologia de forma personalizada para cada necessidade.' },
                { title: 'Visão', text: 'Ser a empresa de referência nacional em engenharia e consultoria em recursos hídricos, meio ambiente e geológico-geotécnica, utilizando soluções técnicas inovadoras e de alta capacidade técnica.' },
                { title: 'Valores', text: ['Ética', 'Transparência', 'Responsabilidade', 'Rigor Técnico', 'Valorizar quem faz nossa empresa', 'Integridade e Credibilidade', 'Sustentabilidade', 'Inovação', 'Empreendedorismo'] },
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Typography sx={{ fontSize: '18px', fontFamily: 'Inter, sans-serif', color: '#083163' }}>
                    <strong>{item.title}:</strong> {Array.isArray(item.text) ? <ul style={{ paddingLeft: '20px' }}>{item.text.map((val, i) => <li key={i}>{val}</li>)}</ul> : item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f2f2f2',
                  color: 'black',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#688198',
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={handlePrev} 
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f2f2f2',
                  color: 'black',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#688198',
                    transform: 'scale(1.05)', 
                  },
                }}
                onClick={handleNext} 
              >
                Próximo
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Terceiro Card: Clientes, Equipe, Tecnologia, Cooperação e Crescimento */}
      {currentCard === 3 && (
        <Card sx={{ marginBottom: 4, border: '1px solid #ccc', padding: 2, background: 'linear-gradient(#ffffff, #688198)' }}>
          <CardContent>
            <Typography variant="h4" color="#083163" gutterBottom sx={{ textAlign: 'left', fontWeight: 'bold' }}>
              Nossa Filosofia
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f2f2f2',
                  color: 'black',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#688198',
                    transform: 'scale(1.05)', 
                  },
                }}
                onClick={handlePrev} 
              >
                Voltar
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f2f2f2',
                  color: 'black',
                  transition: 'background-color 0.3s ease, transform 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#688198',
                    transform: 'scale(1.05)', 
                  },
                }}
                onClick={handleNext} 
              >
                Próximo
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Values;
