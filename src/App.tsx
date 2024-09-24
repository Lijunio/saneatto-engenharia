import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import './App.css';
import Main from './components/Main';
import Values from './components/Values';
import Experiencia from './components/Experiencia';
import Servicos from './components/Serviços';
import Recursos from './components/Recursos';
import Objetivo from './components/Objetivo';
import Contato from './components/Contato';

const MainPage: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(#ffffff, #688198)', 
        width: '100vw',
        height: '100vh',  
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box', 
        margin: 0, 
        padding: 0,
      }}
    >
      {/* Div para a imagem de fundo e logo */}
      <div
        style={{
          backgroundImage: `url('/imagens/logo.png')`,
          backgroundSize: 'contain', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', 
          width: '100%', 
          height: '100vh', 
        }}
      />

      {/* Div para o botão */}
      <div style={{ marginBottom: '50px', textAlign: 'center' }}> {/* Ajusta a margem inferior */}
        <Button
          variant="contained"
          onClick={() => window.location.href = '/home'}
          style={{
            backgroundColor: '#083163',
            color: '#fff',
            fontSize: '18px',
            padding: '10px 30px',
          }}
        >
          Saiba mais
        </Button>
      </div>
    </div>
  );
};


const HomePage: React.FC = () => {
  return (
    <div
      style={{
        background: `url('/imagens/background.svg') no-repeat center center, linear-gradient(to bottom, #ffffff, #688198)`, // Adiciona a imagem e o gradiente
        backgroundSize: 'cover', 
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg" style={{ padding: '20px' }}>
        <Main />
        <Values />
        <Servicos />
        <Recursos />
        <Objetivo />
        <Contato />
      </Container>
    </div>
  );
};


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/home" render={() => <HomePage />} />
      </Switch>
    </Router>
  );
};

export default App;
