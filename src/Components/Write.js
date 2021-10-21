import React from "react";
import { useInput } from "../hooks/useInput";
import moment from 'moment';
import 'moment/locale/ko';

const Write = ({list, setList, updateMode}) => {


    const _title = useInput("");
    const _content = useInput("");
    const _writer = useInput("writer");

    const newBoard = {
        id: list.length+1, 
        title: _title.value, 
        content: _content.value, 
        writer: _writer.value, 
        // write_date: _write_date.value
    };

    const submitContent = () => {
        // setList(list.concat({id: id++, ...newBoard})); //방법1 :concat
        const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
        setList([...list, {...newBoard, write_date: nowTime}]); //방법2 :스프레드 연산자 사용
        // window.localStorage.setItem("userName", JSON.stringify(userObj));
    }

    const cancleWriting = () => {
        updateMode("list");
    }


    return(
       <div>
           <label> 제목 : <input {..._title}  placeholder="title" /></label>
           <br/>
           내용 : <textarea {..._content} placeholder="write here..." />
           <div className="txt-al-center">
            <button onClick={submitContent}> 등록 </button>
            <button onClick={cancleWriting}> 취소 </button>
           </div>
       </div>
    );
}

export default Write;