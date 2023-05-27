import React from "react";

function FunctionalParent(props)
{
    return(
        <Child passData={"this is functional data is passed"}/>

    )

}
function Child(props)
{
    return(
        <div>
             <h1>{props.passData}</h1>
        </div>
    )
}
export default FunctionalParent;