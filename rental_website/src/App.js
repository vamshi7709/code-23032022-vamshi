import React from 'react'
import './App.css';
import Main from './components/main';
import Explore from './components/explore';
import About from './components/about';
import BottomNav from './components/bottomNav';

function App() {
  return (
    <div className="App">
      <Main />
      <Explore />
      <About />
      <BottomNav />
    </div>
  );
}

export default App;
