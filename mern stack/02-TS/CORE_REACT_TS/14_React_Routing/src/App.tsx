import React from "react";
import './App.css';
import GithubSearch from "./Component/GithubSearch";

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
                <a href="abc" className="navbar-brand">React Github Profile Search App</a>
            </nav>
            <GithubSearch/>
        </React.Fragment>
        )
    }

}
export default App;