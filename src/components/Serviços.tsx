import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Servicos: React.FC = () => {
  const [expanded, setExpanded] = useState([false, false, false]);

  const services = [
    {
      title: 'Recursos Hídricos',
      content: [
        'Líder em Dinâmica dos Fluídos Computacional (CFD)',
                'Estudos de Ruptura Hipotética de Barragens (DAM BREAK)',
                'Planos de Ações de Emergência de Barragens (PAE)',
                'Estudos pluviométricos',
                'Análise e consistência de dados hidrometereológicos',
                'Disponibilidades hídricas superficiais e subterrâneas',
                'Caracterização de corpos hídricos superficiais e subterrâneas',
                'Captação de água nova (alternativas locacionais e projetos)',
                'Outorgas de água',
                'Balanço hídrico e de massa',
                'Planos de operação de sistemas de água bruta/potável',
                'Hidráulica fluvial e controle de cheias',
                'Projetos hidráulicos (barragens, vertedouros, canais tomadas de água, etc.)',
                'Drenagem superficial',
                'Monitoramento Hídrico',
                'Sistemas para contenção de sedimentos',
                'Assoreamento de reservatórios de barragens',
                'Inspeção e segurança de barragens',
                'Modelagem de qualidade de água',
                'Modelagem de água subterrânea',
                'Modelagem de rebaixamento de nível d’água',
                'Drenagem subterrânea',
                'Planos de operação de sistemas de rebaixamento e desaguamento de cavas',
                'Análise de riscos',
                'Medidas de contingência para obras hidráulicas',
                'Plano de Gestão de Águas (PGA)',
      ],
      backgroundImage: 'url(/imagens/Barragens.png)',
    },
    {
      title: 'Geotecnia',
      content: [
                'Planos diretores',
                'Operação e monitoramentos',
                'Engenharia geotécnica especializada',
                'Processamento, design, controle e operação',
                'Estudos de viabilidade',
                'Gerenciamento e Planejamento',
                'Projetos conceituais, básicos e executivos',
      ],
      backgroundImage: 'url(/imagens/geotecnia.png)',
    },
    {
      title: 'Ambiente para Mineração',
      content: [
               'EIA/RIMA – Estudo e Relatório de Impacto Ambiental',
                'RCA/PCA – Relatório e Plano de Controle Ambiental',
                'PUP – Plano de Utilização Pretendida',
                'PBA – Plano Básico Ambiental',
                'RADA – Relatório de Avaliação de Desempenho Ambiental',
                'Estudo integrado de bacias hidrográficas',
                'Regularização de Áreas de Reserva Legal',
                'PRAD – Plano de Recuperação de Áreas Degradadas',
                'Plano de Descomissionamento',
                'Inventário Florestal',
                'Resgate de fauna, flora e ictiofauna',
                'Monitoramento de fauna, flora, ictiofauna, limnológico e socioeconômico',
                'Monitoramento e controle de processos erosivos',
                'Plano de recuperação de áreas degradadas',
                'Diagnóstico, prospecção, monitoramento e resgate arqueológico',
                'Gestão Ambiental Integrada',
                'Estudo de pré-viabilidade ambiental',
      ],
      backgroundImage: 'url(/imagens/mineracao.png)',
    },
  ];

  const handleToggleExpand = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <Box id="serviços" bgcolor="transparent" p={5} mb={5} borderRadius={2}>
      <Typography variant="h5" sx={{ fontSize: '36px', mb: 3, color: '#083163', fontWeight: 'bold' }}>
        Nossos Serviços
      </Typography>

      {/* Carrossel para telas pequenas */}
      <Box display={{ xs: 'block', sm: 'none' }}>
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true}>
          {services.map((service, index) => (
            <Card key={index} sx={{ borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <div
                style={{
                  backgroundImage: service.backgroundImage,
                  backgroundSize: 'cover',
                  height: '300px',
                }}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#083163' }}>
                <Typography sx={{ fontWeight: 'bold', color: "#fff" }}>{service.title}</Typography>
                <Button onClick={() => handleToggleExpand(index)}>
                  <ExpandMore sx={{ transform: expanded[index] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                </Button>
              </CardContent>
              {expanded[index] && (
                <Box sx={{ p: 2 }}>
                  <ul style={{ padding: '0 16px' }}>
                    {service.content.map((line, lineIndex) => (
                      <li key={lineIndex} style={{ fontSize: '12px', textAlign: 'left' }}>{line}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Card>
          ))}
        </Carousel>
      </Box>

      {/* Grid para telas grandes */}
      <Grid container spacing={3} display={{ xs: 'none', sm: 'flex' }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <div
                style={{
                  backgroundImage: service.backgroundImage,
                  backgroundSize: 'cover',
                  height: '300px',
                }}
              />
              <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#083163' }}>
                <Typography sx={{ fontWeight: 'bold', color: "#fff" }}>{service.title}</Typography>
                <Button onClick={() => handleToggleExpand(index)}>
                  <ExpandMore sx={{ transform: expanded[index] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                </Button>
              </CardContent>
              {expanded[index] && (
                <Box sx={{ p: 2 }}>
                  <ul style={{ padding: '0 16px' }}>
                    {service.content.map((line, lineIndex) => (
                      <li key={lineIndex} style={{ fontSize: '12px' }}>{line}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Servicos;
