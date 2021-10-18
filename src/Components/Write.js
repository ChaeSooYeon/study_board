import React from "react";
import { useInput } from "../useInput";

const Write = ({list, setList}) => {
    const _title = useInput("");
    const _content = useInput("");
    const _writer = useInput("writer");
    const _write_date = useInput("2021-10-18");

    const newBoard = {id: list.length+1, title:_title.value, content:_content.value, writer:_writer.value, write_date: _write_date.value};

    const submitContent = () => {
        // setList(list.concat({id: id++, ...newBoard})); //방법1 :concat
        setList([...list, {...newBoard}]); //방법2 :스프레드 연산자 사용
    }


    return(
       <div>
           <input {..._title}  placeholder="title" />
           <textarea {..._content} placeholder="write here..." />
           <button onClick={submitContent}> submit </button>
       </div>
    );
}

export default Write;