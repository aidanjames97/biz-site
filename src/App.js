import './App.css';
import React from 'react';
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./About";
import Products from "./products";

function App() {
  return (
    <div className="App">
      <div className='navbarClass'>
        <Navbar/>
      </div>
      <div className='landingClass'>
        <section id='landing'>
          <Landing/>
        </section>
      </div>      
      <div className='aboutClass'>
        <section id='about'>
          <About/>
        </section>
      </div>
      <div className='productsClass'>
        <section id='products'>
          <Products/>
        </section>
      </div>  
    </div>
  );
}

export default App;
