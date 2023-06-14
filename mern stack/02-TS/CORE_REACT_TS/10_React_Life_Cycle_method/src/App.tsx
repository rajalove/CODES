import React from "react";
import './App.css';
import DigitalWatch from "./Component/Life-Cycle-Method/DigitalWatch";
interface IProps
{
    
}
interface IState
{
  
}
class App extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
    }
   render()
    {
        return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="xyz" className="navbar-brand">React-Props-Drilling & Context-API</a>
            </nav>
            <DigitalWatch/>
        </React.Fragment>
        )
    }

}
export default App;