import React from 'react';
import './App.css';
import GroupTour from './components/GroupTour';
import TourCard from './components/TourCard';

function App() {
  return (
     <React.Fragment>

       <nav className="navbar navbar-dark bg-dark navabar-expand-sm">
        <a href='abc'className='navabar-brand text-white'>React with Bootsrap</a></nav>
         
         
         <TourCard/>
        <GroupTour/>
         

        

     </React.Fragment>
  );
}

export default App;
