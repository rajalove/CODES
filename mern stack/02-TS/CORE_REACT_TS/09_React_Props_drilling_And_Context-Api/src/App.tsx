import React from "react";
import './App.css';
import ComponentOne from "./Component/Context-API/ComponentOne";
import UserContext from "./Component/Context-API/UserContext";
import { UserInfo } from "./Component/Props-Drilling/UserInfo";

interface IProps
{
    
}
interface IState
{
  userInfo:UserInfo;
}
class App extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props);
        this.state={
          userInfo:{
            author:"Kishore",
            channel:"KSpiders"
          }
        }
    }
   render()
    {
        return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="xyz" className="navbar-brand">React-Props-Drilling & Context-API</a>
            </nav>

            <section className="mt-3">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-body bg-success text-white">
                        <h3>App Component</h3>
                        <small>{JSON.stringify(this.state.userInfo)}</small>
                        
                        <UserContext.Provider value={this.state.userInfo}>
                          <ComponentOne/>
                        </UserContext.Provider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </React.Fragment>
        )
    }

}
export default App;