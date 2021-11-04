import React from "react";
import Tr from "./Tr";

const Table = (props) => {
  
  const click_WriteButton = () => {
    props.updateMode("write");
  }

  const view_detailBoard = () => {
    props.updateMode("detail");
  }

  return (
    <div className="List">
      <button onClick={click_WriteButton} className="fl-right"><span role="img" >✍</span>글쓰기</button>
      <table>
        <thead>
          <tr><th>No.</th><th>제목</th><th>작성자</th><th>작성일</th></tr>
        </thead>
        <tbody>
          {props.list? props.list.map((data)=>(
            <Tr key={data.id} data={data} onClick={view_detailBoard}></Tr>
          )) : 
            <tr key="0"><td colSpan="4">목록이 없습니다.</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;