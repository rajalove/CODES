import React, { useState } from "react";

let HobbySelector=()=>
{
    let [Hobbies,setHobbies]=useState({
        Eat:false,
        Meet:false,
        Sleep:false,
    });

let myHobby=(event)=>
{
    setHobbies({
        ...Hobbies,
      [event.target.name]:event.target.checked,
    })
}
    return(
        <React.Fragment>
            <pre>{JSON.stringify(Hobbies)}</pre>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h2">hobby selector</p>
                            </div>

                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <form action="">
                                          <div className="form-group">
                                          <div className="form-check">
                                           <input type="checkbox" className="form-check-input" name='Eat' onClick={myHobby}/>
                                           <label className='form-check-label'>eating</label>
                                           </div>
                                          </div>

                                          <div className="form-group">
                                          <div className="form-check mt-3">
                                           <input type="checkbox" className="form-check-input" name='Meet' onClick={myHobby}/>
                                           <label className='form-check-label'>meeting</label>
                                           </div>
                                          </div>

                                          <div className="form-group">
                                          <div className="form-check mt-3">
                                           <input type="checkbox" className="form-check-input" name='Sleep' onClick={myHobby}/>
                                           <label className='form-check-label'>sleeping</label>
                                           </div>
                                          </div>
                                        </form>
                                    </div>

                                    <div className="col-md-8">
                                       {
                                        Hobbies.Eat &&
                                        <div className="card mt-2 rgba-green-light">
                                        <div className="card-body">
                                            <p className=" h4 text-secondary">eating</p>
                                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam corrupti, quidem, reiciendis cupiditate, 
                                            dolorem ea voluptates doloribus error eligendi minus suscipit quo qui sequi maiores porro. Omnis sed odit alias.</p>
                                        </div>
                                    </div>
                                        
                                       }

                                       {
                                        Hobbies.Meet &&
                                        <div className="card mt-2 rgba-yellow-light">
                                        <div className="card-body">
                                            <p className=" h4 text-warning">meeting</p>
                                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam corrupti, quidem, reiciendis cupiditate, 
                                            dolorem ea voluptates doloribus error eligendi minus suscipit quo qui sequi maiores porro. Omnis sed odit alias.</p>
                                        </div>
                                    </div>
                                        
                                       }

                                       {
                                        Hobbies.Sleep &&
                                        <div className="card mt-2 rgba-orange-light">
                                        <div className="card-body">
                                            <p className=" h4 text-danger">sleeping</p>
                                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam corrupti, quidem, reiciendis cupiditate, 
                                            dolorem ea voluptates doloribus error eligendi minus suscipit quo qui sequi maiores porro. Omnis sed odit alias.</p>
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
            </section>
        </React.Fragment>
    );
};

export default HobbySelector;