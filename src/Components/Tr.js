import React from "react";

function Tr({data}){
    return(
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.content}</td>
            <td>2021.10.08</td>
        </tr>
    );
}

export default Tr;