import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const Values: React.FC = () => {
  const [showFirstCard, setShowFirstCard] = useState(true);

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true, // Habilita o loop do carrossel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      id="quem-somos"
      borderRadius={2}
      sx={{
        minHeight: '500px',
        p: { xs: 0, sm: 5 },
        mb: 5,
      }}
    >
      {/* Primeiro Card: Quem somos */}
      {showFirstCard && (
        <Card sx={{ marginBottom: 4, border: '1px solid #ccc' }}>
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
                      animation: 'colorChange 3s infinite',
                      '@keyframes colorChange': {
                        '0%': { backgroundColor: '#ffffff' },
                        '50%': { backgroundColor: '#688198' },
                        '100%': { backgroundColor: '#ffffff' },
                      },
                    }}
                    onClick={() => setShowFirstCard(false)} 
                  >
                    Próximo
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}

      {/* Carrossel de Missão, Visão e Valores */}
      {!showFirstCard && (
        <Box sx={{ marginBottom: 4 }}>
          <Slider {...settings}>
            {[ 
              { title: 'Missão', text: 'Nossa missão é proporcionar soluções de engenharia inovadoras, eficientes, utilizando o estado da arte em tecnologia de forma personalizada para cada necessidade.' },
              { title: 'Visão', text: 'Ser a empresa de referência nacional em engenharia e consultoria em recursos hídricos, meio ambiente e geológico-geotécnica, utilizando soluções técnicas inovadoras e de alta capacidade técnica.' },
              { title: 'Valores', text: ['Ética', 'Transparência', 'Responsabilidade', 'Rigor Técnico', 'Valorizar quem faz nossa empresa', 'Integridade e Credibilidade', 'Sustentabilidade', 'Inovação', 'Empreendedorismo'] },
            ].map((section, index) => (
              <div key={index}>
                <Card sx={{ border: '1px solid #ccc', minHeight: '350px' }}>
                  <CardContent sx={{ position: 'relative' }}>
                    <Box
                      sx={{
                        backgroundColor: '#083163',
                        color: 'white',
                        padding: 2,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1,
                      }}
                    >
                      <Typography variant="h5" align="center">
                        {section.title}
                      </Typography>
                    </Box>
                    {Array.isArray(section.text) ? (
                      <ul style={{ marginTop: '50px', fontSize: '18px', padding: '0 16px' }}>
                        {section.text.map((valor) => (
                          <li key={valor}>{valor}</li>
                        ))}
                      </ul>
                    ) : (
                      <Typography sx={{ fontSize: '18px', textAlign: 'left', marginTop: '50px' }}>
                        {section.text}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Box>
      )}

      {/* Botão "Voltar" */}
      {!showFirstCard && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#f2f2f2',
              color: 'black',
              animation: 'colorChange 3s infinite',
              '@keyframes colorChange': {
                '0%': { backgroundColor: '#ffffff' },
                '50%': { backgroundColor: '#688198' },
                '100%': { backgroundColor: '#ffffff' },
              },
            }}
            onClick={() => setShowFirstCard(true)} 
          >
            Voltar
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Values;
