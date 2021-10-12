import React from "react";
import Tr from "./Tr";


const list = [
    { id:1, title :'제목제목제목제목제목제목제목제목', content: 'content1', writer: 'wrter1'},
    { id:2, title :'제목제목제목제목제목제목제목제목', content: 'content2', writer: 'wrter2'},
    { id:3, title :'제목제목제목제목제목제목제목제목', content: 'content3', writer: 'wrter3'},
    { id:4, title :'제목제목제목제목제목제목제목제목', content: 'content4', writer: 'wrter4'},
    { id:5, title :'제목제목제목제목제목제목제목제목', content: 'content5', writer: 'wrter5'}
  ];


const List = (props) => {
  
  const click_WriteButton = () => {
    props.updateMode("write");
  }

  return (
    <div className="List">
      <button onClick={click_WriteButton}>작성하기</button>
      <table>
        <thead>
          <tr><th>No.</th><th>제목</th><th>작성자</th><th>작성일</th></tr>
        </thead>
        <tbody>
          {list.map((data)=>(
              <Tr key={data.id} data={data}></Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;