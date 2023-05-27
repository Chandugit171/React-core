import React from "react";

class HandlerMethod extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            accountholder:'Narmdha',
            accountNumber:'1234567890',
            ifscCode:1234,
            balance:100000000
        }
        this.handlechange=this.handlechange.bind(this)
    }
    handlechange()
    {
        this.setState({balance:0})
       
    }

    render()
    {
        return(
            <div>
            <h1>Account Details of Ambani mwa.... </h1><hr></hr>
            <p>{this.state.accountholder}</p>
            <p>{this.state.accountNumber}</p>
            <p>{this.state.ifscCode}</p>
            <p>{this.state.balance}</p>
            <button onClick={this.handlechange}>Account money looty</button>
        </div>
        )
    }
}
export default HandlerMethod;

    
