import React from "react";

function Detail({location}){
    const data = location.state.data;
    return(
       <div className="content">
          <div>제목 : {data.title} </div>
          <div>작성자 : {data.writer}  |  작성일 : {data.write_date}</div>
          <div>내용 : {data.content} </div>
       </div>
    );
}

export default Detail;