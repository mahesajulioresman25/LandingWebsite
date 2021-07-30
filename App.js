import React from 'react';
import Feature from './components/Feature';
import Persentation from './components/Persentation';
import Header from './components/Header';
import About from './components/About';
import frame from './images/Frame 19.png';
import download from './images/download.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Feature />
      <Persentation />
      <About image={frame} title="Comes With All You Need For Daily Life" button="Get The App"/>
      <About image={download} title="Download And Get The App" button="Download"/>
      <Contact />
    </div>
  );
}

export default App;
