import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Router from './router'
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
