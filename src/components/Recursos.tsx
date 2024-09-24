import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Recursos: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const cards = [
    {
      title: "Recursos Hídricos",
      content: "A Saneatto Engenharia conta com equipe técnica de doutores, capazes de desenvolverem e atuarem em toda a gama que envolve a área de recursos hídricos, como elaboração de estudos de disponibilidade hídrica, estudos de bacias hidrográficas, estudos de rompimentos de barragens, etc.",
      image: "/imagens/4.png" // Imagem correspondente ao card
    },
    {
      title: "Ruptura Hipotética de Barragens",
      content: "A equipe da Saneatto Engenharia é especialista em estudos de ruptura de barragens ('Dam Break'), avaliando impactos e elaborando mapas de inundação exigidos por órgãos reguladores. Pioneira no uso de Dinâmica dos Fluidos Computacional (CFD), a empresa simula numericamente processos com escoamento físico e físico-químico.",
      image: "/imagens/5.png"
    },
    {
      title: "Simulações de CFD",
      content: "As áreas de atuação dentro do CFD são inúmeras, indo desde simulações hidraulicas de dispositivos de drenagem, passando por sistemas extravasores complexos, até simulações tridimensionais de Dam Breaks.",
      image: "/imagens/6.png"
    },
    {
      title: "Equipe Multidisciplinar",
      content: "Formada por equipe multidisciplinar, conta com profissionais capazes de desenvolver estudos utilizando as ferramentas mais complexas e assertivas disponíveis no mercado, como FLOW-3D, um software CFD preciso, rápido e comprovado que resolve os mais difíceis problemas de fluxo em superfície livre. Pioneiro na indústria de CFD e líder confiável, o FLOW-3D é uma solução abrangente e altamente eficiente para problemas de fluxo em superfície livre com suporte centrado no ser humano.",
      image: "/imagens/7.png"
    },
    {
      title: "Modelos Hidrodinâmicos",
      content: "Estudos CFD elaborados com ferramentas como o FLOW-3D permitem a confeção de modelos hidrodinâmicos com margem de erro de aproximadamente 1% em relação a modelos reais.",
      image: "/imagens/8.png"
    },
  ];

  return (
    <Box sx={{
        background: 'linear-gradient(#ffffff, #688198)', 
        p: { xs: 3, sm: 5 }, 
        mb: 5,
        borderRadius: 2,
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ fontSize: '36px', mb: 2, color:'#083163', fontWeight: 'bold' }}>
            Recursos Hídricos
          </Typography>
          <img src="/imagens/hidrico.png" alt="Recursos Hídricos" style={{ width: '100%', height: 'auto' }} />
        </Grid>

        <Grid item xs={12} md={6} sx={{ pl: { xs: 0, md: '50px' } }}>
          <Slider {...settings}>
            {cards.map((card, index) => (
              <Box key={index} sx={{ p: 2, background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography sx={{ fontSize: '18px', textAlign: 'justify', mb: 2 }}>{card.content}</Typography>
                <img src={card.image} alt={`Imagem do card ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
              </Box>
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recursos;
