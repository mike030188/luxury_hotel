import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/pages/Home';
import { Container } from './components/styles/Container.style';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      
      <Home/>
      
    </Container>
    
  </React.StrictMode>
);

