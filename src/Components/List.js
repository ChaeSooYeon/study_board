import React, { Component } from "react";
import Tr from "./Tr";

class List extends Component {
  state = {
    list : [
      { id:1, title :'title1', content: 'content1'},
      { id:2, title :'title1', content: 'content1'},
      { id:3, title :'title1', content: 'content1'},
      { id:4, title :'title1', content: 'content1'},
      { id:5, title :'title1', content: 'content1'}
    ]
  }
  render(){

    return (
      <div className="List">
        <table>
          <thead>
            <tr><th>No.</th><th>제목</th><th>작성자</th><th>작성일</th></tr>
          </thead>
          <tbody>
            {/* <Tr></Tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;