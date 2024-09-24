import React from 'react';
import Main from './components/Main';
import Values from './components/Values';
import Experiencia from './components/Experiencia'; 
import Recursos from './components/Recursos';
import Servicos from './components/Serviços';
import Objetivo from './components/Objetivo';
import Contato from './components/Contato';
import { Container } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #ffffff, #688198)', minHeight: '100vh' }}>
      <Container maxWidth="lg" style={{ padding: '20px' }}>
        <Main />
        <Values />
        <Experiencia />
        <Servicos />
        <Recursos />
        <Objetivo />
        <Contato />
      </Container>
    </div>
  );
};

export default App;
