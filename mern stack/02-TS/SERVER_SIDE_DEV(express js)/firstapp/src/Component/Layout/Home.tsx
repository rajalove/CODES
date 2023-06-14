import React from "react";
interface IProps
{

}
interface IState
{

}
class Home extends React.Component<IProps,IState>
{
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor (props:IProps)
    {
        super(props)
    }
   render()
    {
        return(
        <React.Fragment>
            <div className="landing">
                <div className="wrapper">
                    <div className="text-center h-100 flex d-flex justify-content-center align-content-center flex-column">
                        <h3 className="display-3">Green Basket</h3>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis obcaecati nisi, est magni quos fugiat, voluptas quis cupiditate reiciendis reprehenderit placeat sequi nihil, dolorem dolor dolores. Dolores est ab possimus eaque. Molestiae magnam tenetur in ad! Architecto quae autem ut, consequuntur accusantium facilis, velit rem debitis esse fugit animi adipisci.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default Home;