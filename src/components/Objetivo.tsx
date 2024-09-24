// src/components/Objetivo.tsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Objetivo: React.FC = () => {
  return (
    <Box bgcolor="transparent" p={5} mb={5} borderRadius={2}>
      {/* Título centralizado */}
      <Typography variant="h4" sx={{ fontSize: '36px', textAlign: 'center', color: '#083163', fontWeight: 'bold', mb: 5 }}>
        Objetivos do Desenvolvimento Sustentável
      </Typography>

      {/* Grid para a imagem e o texto */}
      <Grid container spacing={5}>
        {/* Coluna esquerda com a imagem */}
        <Grid item xs={12} md={6}>
          <img 
            src="/imagens/9.png" 
            alt="Objetivos do Desenvolvimento Sustentável"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        {/* Coluna direita com o texto */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ fontSize: '16px', textAlign: 'justify' }}>
            No mundo corporativo e industrial, os ODS representam negócios mais responsáveis, eficientes, competitivos e transparentes;
            práticas industriais menos agressivas ao meio ambiente e aos recursos naturais; contribuição para o bem-estar geral, saúde e
            qualidade de vida no planeta. Dessa forma, ao adotar uma metodologia condizente com os 17 Objetivos de Desenvolvimento
            Sustentável, a Saneatto Engenharia contribui com um papel importante na conservação da vida, da natureza e dos recursos
            naturais da Terra.
            <br /><br />
            Temos a incumbência e desafio em promover ao menos um ODS em nossos projetos geotécnicos, fechamento de mina, assim como
            nos de descomissionamento. Nossas habilidades de gestão de dados ambientais nos permitem processar e integrar grandes e variados
            conjuntos de dados espaciais, ambientais, de mineração, hidrológicos e geotécnicos. A análise e comparação dos resultados apoia a
            tomada de decisão multidisciplinar e a implementação de soluções exclusivas.
            <br /><br />
            A Saneatto Engenharia é membro da “Estratégia ODS”, uma coalizão que reúne organizações da sociedade civil, setor privado,
            governos locais e academia para ampliar e qualificar o debate sobre os ODS no Brasil e propor meios de implementação efetivos.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Objetivo;
