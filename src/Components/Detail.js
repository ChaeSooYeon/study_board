import React from "react";
import { Link } from "react-router-dom";
import "../CSS/View.css";

function Detail({history, location}){
    const data = location.state.data;
    return(
       <div className="content">
          <div className="">
            <Link to="/">
                <button>&lt; 목록</button>
            </Link>
          </div>
          <div className="detail_row">
              <div className="sub">제목</div>
              <div>{data.title}</div> 
          </div>
          <div className="detail_row">
              <div className="sub">작성자</div>
              <div>{data.writer}</div>
          </div>
          <div className="detail_row">
              <div className="sub">작성일</div>
              <div>{data.write_date}</div> 
          </div>
          <div className="detail_cont">{data.content} </div>
       </div>
    );
}

export default Detail;