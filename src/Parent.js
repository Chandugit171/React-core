// import React from "react";

// class Parent extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {data:"this is the parent datacomponent"};
//     }

//     render()
//     {
//         return(
//             <div>
//                 <Child passData = {this.state.data}></Child>
//             </div>
//         )
//     }
// }
// class Child extends React.Component
// {
//     render()
//     {
//         return(
//                     <div>
//                         <h1>{this.props.passData}</h1>
//                     </div>
//                 )
//     }
// }

// export default Parent;



import React from 'react';

class Parent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={text:"this is the text for data analysts"}
    }
    render()
    {
        return(
                    <div>
                        <Child data={this.state.text}></Child>
                    </div>
                )
    }
}
class Child extends React.Component
{
    render()
    {
        return(
                            <div>
                                <h1>{this.props.data}</h1>
                            </div>
                        )
    }
}
export default Parent;