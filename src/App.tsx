import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import './App.css';
import Main from './components/Main';
import Values from './components/Values';
import Servicos from './components/Serviços';
import Recursos from './components/Recursos';
import Objetivo from './components/Objetivo';
import Contato from './components/Contato';

const MainPage: React.FC = () => {
  const [isPrimaryColor, setIsPrimaryColor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPrimaryColor((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

      <div style={{ marginBottom: '100px', textAlign: 'center' }}>
        <Button
          variant="contained"
          onClick={() => window.location.href = '/home'}
          style={{
            background: isPrimaryColor
              ? 'linear-gradient(90deg, #083163 0%, #ffffff 100%)' 
              : 'linear-gradient(90deg, #ffffff 0%, #083163 100%)', 
            color: isPrimaryColor ? '#ffffff' : '#083163', 
            fontSize: '18px',
            padding: '10px 30px',
            transition: 'background 1s ease, color 1s ease', 
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
        background: `url('/imagens/background.svg') no-repeat center center, linear-gradient(to bottom, #ffffff, #688198)`, 
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
