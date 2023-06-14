import React from 'react';
import img1 from './raja.jpg';

interface IProps{}

interface IState{}

class Products extends React.Component<IProps,IState>
{
  

    render()
    {
        return(
            <React.Fragment>
                 <div className="container mt-5">
                     <div className="row">
                         <div className="col-sm-4">     
                                <div className="card">
                                    <img src={img1} alt="" />
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h5>this is tittle</h5>
                                            <div className="card-text">
                                                <p>hu anitha i told u some may time but u cnst fbfb ffvb hi znitz</p>
                                            </div>
                                           </div>
                                          </div>
                                         </div>
                                        </div>
                          <div className="col-sm-4">
                              <div className="card">
                                  <img src={img1} alt="" />
                                  <div className="card-body">
                                      <div className="card-title">
                                          <h5>this is tittle</h5>
                                          <div className="card-text">
                                              <p>hu anitha i told u some may time but u cnst fbfb ffvb hi znitz</p>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                             </div>
                             <div className="col-sm-4">
                              <div className="card">
                                  <img src={img1} alt="" />
                                  <div className="card-body">
                                      <div className="card-title">
                                          <h5>this is tittle</h5>
                                          <div className="card-text">
                                              <p>hu anitha i told u some may time but u cnst fbfb ffvb hi znitz</p>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
            
            

                 
             </React.Fragment>

        )
    }
}

export default Products;
