import React from "react";
import Tr from "./Tr";

const List = (props) => {
  
  const click_WriteButton = () => {
    props.updateMode("write");
  }

  const view_detailBoard = () => {
    props.updateMode("detail");
  }

  return (
    <div className="List">
      <button onClick={click_WriteButton}>작성하기</button>
      <table>
        <thead>
          <tr><th>No.</th><th>제목</th><th>작성자</th><th>작성일</th></tr>
        </thead>
        <tbody>
          {props.list.map((data)=>(
              <Tr key={data.id} data={data} onClick={view_detailBoard}></Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;