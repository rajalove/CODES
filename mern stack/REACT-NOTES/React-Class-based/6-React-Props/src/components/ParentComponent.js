import React from 'react';
import Navabar from './Navabar';

class ParentComponent extends React.Component{
  
     render(){

        return(
            <React.Fragment>

                <Navabar name="raja" age="24" class="bsc(chemistry)"/>
                <Navabar name="roja" age="22" class="Btech"/>
                <Navabar name="pallavi" age="25" class="10th class"/>
                
            </React.Fragment>
        );

     }
}

export default ParentComponent;