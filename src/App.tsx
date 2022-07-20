import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './UI/components/header/Header';
import { Routing } from './UI/routing/Routing';
import { LoginPage } from './UI/pages/loginPage/LoginPage';
import { Footer } from './UI/components/footer/Footer';

function App() {

  

  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
