import React from "react";
class BankDetails extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            accountName: 'Ananya',
            accountNumber: '1234567890',
            ifscCode: '12345',
            branchName:'Hyderabad',
            accountBalance: 100000000000

        }
        
    }
    render()
    {
        return(
            <div>
            <h1>Account Details</h1><hr></hr>
            <p>Account Name: {this.state.accountName}</p>
            <p>Account Number: {this.state.accountNumber}</p>
            <p>IFSC Code: {this.state.ifscCode}</p>
            <p>Branch Name: {this.state.branchName}</p>
            <p>Account Balance: {this.state.accountBalance}</p>
            </div>  
        )
    }
}
export default BankDetails;