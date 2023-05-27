import React from "react";
// import "./Style.css";
const arrobj=[
                {id:1,name:"Shardha Kapoor",desc:"bueatiful girl"},
                {id:1,name:"Ananya Pandya",desc:"bueatiful girl"},
                {id:1,name:" Anuska Sharma",desc:"bueatiful girl"}

              ];
class ArrayMap extends React.Component
{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th className="color">Name</th>
                        <th>Description</th>
                    </tr>
                    {
                        arrobj.map((item)=>(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.desc}</td>
                            </tr>

                        ))
                    }

                </table>

            </div>
        );
    }
}
export default ArrayMap;