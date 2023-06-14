// import react from 'react';

// interface IProps{}

// interface IState{

//     eating:boolean;
//     meeting:boolean;
//     chatting:boolean;
// }

// class HobieeSelector extends react.Component<IProps,IState>
// {
//     constructor(props:IProps)
//     {
//         super(props);
//          this.state={
              
//              eating:false,
//              meeting:false,
//              chatting:false,
          
//          }
//     }

//    Raja=(event:React.ChangeEvent<HTMLInputElement>)=>
//    {
//    this.setState({
//        ...this.state,
//        [event.target.name]:event.target.checked
//    })
//    }

//     render()
//     {
//         return(
//             <react.Fragment>
//                 <div className="container mt-5">
//                     <div className="row">
//                         <div className="col-md-7">
//                             <div className="card">
//                                 <div className="card-header bg-primary">
//                                     <h1>header</h1>
//                                 </div>

//                                 <div className="card-body bg-light">
//                                    <div className="row">
//                                        <div className="col-md-4">
//                                        <div className="form-check">
//                                         <input type="checkbox"className='form-check-input'name='eating' onChange={this.Raja} />
//                                         <label className="form-check-label">
//                                             eating
//                                         </label>
//                                            </div>

//                                            <div className="form-check">
//                                         <input type="checkbox"className='form-check-input'name='meeting' onChange={this.Raja} />
//                                         <label className="form-check-label">
//                                             meeting
//                                         </label>
//                                            </div>

//                                            <div className="form-check">
//                                         <input type="checkbox"className='form-check-input'name='chatting' onChange={this.Raja} />
//                                         <label className="form-check-label">
//                                             chatting
//                                         </label>
//                                            </div>
//                                        </div>

//                                        <div className="col-md-8">
//                                            {
//                                                this.state.eating===true &&
//                                               <div className="card bg-danger text-white">
//                                                   <div className="card-body bg-success">
//                                                        <h2>hi all</h2>
//                                                     <p>erogf nrigrn nkgnrkn ngkrn gng rgnk rng
//                                                          gong ngrgngg k
//                                                           grgn reikgngng rkengrkgn rgk nrgk
//                                                     </p>
//                                                   </div>
//                                               </div>
//                                            }

//                                             {
//                                                this.state.meeting===true &&
//                                               <div className="card bg-danger text-white mt-3">
//                                                   <div className="card-body bg-success">
//                                                     <h2>i am meeting</h2>
//                                                     <p>erogf nrigrn nkgnrkn ngkrn gng rgnk rng
//                                                          gong ngrgngg k
//                                                           grgn reikgngng rkengrkgn rgk nrgk
//                                                     </p>
//                                                   </div>
//                                               </div>
//                                            }

//                                              {
//                                                this.state.chatting===true &&
//                                               <div className="card bg-danger text-white mt-3">
//                                                   <div className="card-body bg-success">
//                                                    <h2>i am chatting</h2>
//                                                     <p>erogf nrigrn nkgnrkn ngkrn gng rgnk rng
//                                                          gong ngrgngg k
//                                                           grgn reikgngng rkengrkgn rgk nrgk
//                                                     </p>
//                                                   </div>
//                                               </div>
//                                            }
//                                        </div>
//                                    </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
            
                              
//              </react.Fragment>

//         )
//     }
// }
 
// export default HobieeSelector;

//..................................//..........................//..............


// import React from "react";
// interface IProps
// {

// }
// interface IState
// {
//     eating:boolean;
//     sleeping:boolean;
//     coding:boolean;
// }

// class HobieeSelector extends React.Component<IProps,IState>
// {
//     // eslint-disable-next-line @typescript-eslint/no-useless-constructor
//     constructor (props:IProps)
//     {
//         super(props);
//         this.state={
//             eating:false,
//             sleeping:false,
//             coding:false
//         }
//     }

//     //update check function
//     updateCheck=(event:React.ChangeEvent<HTMLInputElement>)=>
//     {
//         this.setState(
//             {
//                 ...this.state,
//                 [event.target.name]:event.target.checked
//             }
//         )
//     }
//    render()
//     {
//         return(
//         <React.Fragment>
//             <section className="mt-3">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-7">
//                             <div className="card">
//                                 <div className="card-header bg-success text-white">
//                                     <h2>Hobiee Selector</h2>
//                                 </div>
//                                 <div className="card-body bg-light">
//                                     <div className="row">
//                                         <div className="col-md-4">
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" name="eating" onChange={this.updateCheck}/>
//                                                     <label className="form-check-label">
//                                                     Eating
//                                                     </label>
//                                             </div>
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" name="sleeping" onChange={this.updateCheck}/>
//                                                     <label className="form-check-label">
//                                                     Sleeping
//                                                     </label>
//                                             </div>
//                                             <div className="form-check">
//                                                 <input className="form-check-input" type="checkbox" name="coding" onChange={this.updateCheck}/>
//                                                     <label className="form-check-label">
//                                                     Coding
//                                                     </label>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-8">
//                                             {
//                                                 this.state.eating===true &&
//                                                 <div className="card">
//                                                 <div className="card-body bg-danger text-white">
//                                                     <h2>Eating</h2>
//                                                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deleniti placeat sapiente magnam quisquam eos minus voluptatibus rem a? Nihil voluptates</p>
//                                                 </div>
//                                             </div>
//                                             }
//                                             {
//                                                 this.state.sleeping===true &&
//                                                 <div className="card mt-2">
//                                                 <div className="card-body bg-info text-white">
//                                                     <h2>Sleeping</h2>
//                                                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deleniti placeat sapiente magnam quisquam eos minus voluptatibus rem a? Nihil voluptates</p>
//                                                 </div>
//                                             </div>
//                                             }
//                                             {
//                                                 this.state.coding===true &&
//                                                 <div className="card mt-2">
//                                                 <div className="card-body bg-warning text-white">
//                                                     <h2>Coding</h2>
//                                                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore deleniti placeat sapiente magnam quisquam eos minus voluptatibus rem a? Nihil voluptates</p>
//                                                 </div>
//                                             </div>
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//         )
//     }

// }
// export default HobieeSelector;


import react from 'react';

interface IProps{}

interface IState{
    love:boolean;
    life:boolean;
    success:boolean;
}

class HobieeSelector extends react.Component<IProps,IState>
{
    constructor(props:IProps)
    {
        super(props);
        this.state={
            love:false,
            life:false,
            success:false,
        }
    }
    
    Raju=(event:React.ChangeEvent<HTMLInputElement>)=>
    {
     this.setState({
         ...this.state,
         [event.target.name]:event.target.checked
     })
    }
    render()
    {
        return(
            <react.Fragment>
               <div className="container mt-5">
                   <div className="row">
                       <div className="col-md-7">
                           <div className="card">
                               <div className="card-header bg-primary">
                                   <h1>failure</h1>
                               </div>
                                 
                               <div className="card-body bg-light">
                                   <div className="row">
                               <div className="col-md-4">
                                <div className="form-check">
                                    <input type="checkbox" className='form-check-input'onChange={this.Raju} name="love"/>
                                    <label className="form-check-label">
                                        love
                                    </label>
                                </div>
                                
                                <div className="form-check">
                                    <input type="checkbox" className='form-check-input'onChange={this.Raju} name="life"/>
                                    <label className="form-check-label">
                                         life
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input type="checkbox" className='form-check-input'onChange={this.Raju} name="success"/>
                                    <label className="form-check-label">
                                        success
                                    </label>
                                </div>
                                </div>

                               <div className="col-md-8">
                                 {
                                     this.state.love===true && 
                                       
                                   <div className="card bg-dark">
                                   <div className="card-body  text-center text-white">
                                       <h2>love</h2>
                                       <p>hgoi gi gn g ern ngrgnrg ufb ehfb hbehfbe 
                                           sfnkjfn nn nnn jfnrnf f
                                            fne nfnfnejfnj ngmkr bhehfbe hebfeh</p>
                                   </div>
                                   </div>
                                 }

                                  {
                                      this.state.life===true && 
                                      <div className="card bg-warning mt-2">
                                      <div className="card-body  text-center text-white">
                                          <h2>life</h2>
                                          <p>hgoi gi gn g ern ngrgnrg ufb ehfb hbehfbe 
                                              sfnkjfn nn nnn jfnrnf f
                                               fne nfnfnejfnj ngmkr bhehfbe hebfeh</p>
                                      </div>
                                      </div>
                                  }
                                      
                                   {
                                       this.state.success===true &&
                                       <div className="card bg-info mt-2">
                                       <div className="card-body text-center text-white">
                                           <h2>success</h2>
                                           <p>hgoi gi gn g ern ngrgnrg ufb ehfb hbehfbe 
                                               sfnkjfn nn nnn jfnrnf f
                                                fne nfnfnejfnj ngmkr bhehfbe hebfeh</p>
                                       </div>
                                       </div>
                                   }
                                   </div>
                               </div>
                               </div>
                           </div>
                           </div>

                       </div>
                   </div>
               
             </react.Fragment>

        )
    }
}
 
export default HobieeSelector;