import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import IntroSection from './components/intro-section/IntroSection';
import LandingPage from './components/landing-page/LandingPage';
import Navabar from './components/navbar/Navbar';
import TourContainers from './components/tours/TourContainers';



function App(){

  return (

     <React.Fragment>

      <Navabar/>
      <LandingPage/>
      <IntroSection/>
      <TourContainers/>
      <Footer/>

     </React.Fragment>
  );
}

export default App;
