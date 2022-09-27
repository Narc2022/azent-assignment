import React from 'react';
import './App.css';
import MainNav from './Component/Basics/MainNav';
import Screen from './Component/Basics/Screen';

const App = () => {
  return (
    <>
      <div className="main-nav-container">
        <MainNav />
      </div>
      <section className='heading'>
      <h4 style={{ width: "100%", textAlign: "center" }}>Explore Our Events</h4>
      </section>
      
      <div className="main-body-container">
        <Screen />
      </div>
    </>
  )
}

export default App