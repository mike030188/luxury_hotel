import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import { Container } from './components/styles/Container.style';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Facilities from './components/pages/Facilities';
import Rooms from './components/pages/Rooms';
import ContactUs from './components/pages/ContactUs';


function App () {
  return (
    <Container>      
      <BrowserRouter>
        <MainApp/>
      </BrowserRouter>      
    </Container>
    
  )
}

function MainApp () {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/facilities' element={<Facilities/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>


      </Routes>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));



