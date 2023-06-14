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
                    <div className='d-flex flex-column justify-content-center align-items-center text-center h-100'>
                        <h2>Welcome To TechNext Solution Pvt. Ltd.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nihil tempora laborum numquam aliquam libero incidunt animi explicabo delectus consectetur sit, modi dicta ut laboriosam impedit dolorem dolore dolores cum. Ullam hic necessitatibus libero illum eaque fugiat nostrum perferendis, excepturi qui, maxime amet eveniet labore dolor et voluptatibus cum vel impedit quas quidem explicabo mollitia iste atque unde. Eaque, quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nihil tempora laborum numquam aliquam libero incidunt animi explicabo delectus consectetur sit, modi dicta ut laboriosam impedit dolorem dolore dolores cum. Ullam hic necessitatibus libero illum eaque fugiat nostrum perferendis, excepturi qui, maxime amet eveniet labore dolor et voluptatibus cum vel impedit quas quidem explicabo mollitia iste atque unde. Eaque, quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore nihil tempora laborum numquam aliquam libero incidunt animi explicabo delectus consectetur sit, modi dicta ut laboriosam impedit dolorem dolore dolores cum. Ullam hic necessitatibus libero illum eaque fugiat nostrum perferendis, excepturi qui, maxime amet eveniet labore dolor et voluptatibus cum vel impedit quas quidem explicabo mollitia iste atque unde. Eaque, quisquam.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }

}
export default Home;