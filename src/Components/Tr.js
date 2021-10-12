import React from "react";

function Tr({data}){
    return(
        <tr>
            <td className="number">{data.id}</td>
            <td className="title">{data.title}</td>
            <td className="writer">{data.writer}</td>
            <td className="write_date">{data.write_date}</td>
        </tr>
    );
}

export default Tr;