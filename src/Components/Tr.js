import React from "react";
import { Link } from "react-router-dom";

function Tr({data}){
    return(
        <tr>
            <td className="number">{data.id}</td>
            <td className="title"><Link to={{pathname:'/Detail/'+data.id, state:{data}}}>{data.title}</Link></td>
            <td className="writer">{data.writer}</td>
            <td className="write_date">{data.write_date}</td>
        </tr>
    );
}

export default Tr;