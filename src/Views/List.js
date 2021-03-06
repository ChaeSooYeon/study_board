import { useState } from 'react';
import '../CSS/App.css';
import Header from '../Components/Header';
import Table from '../Components/Table';
import Write from '../Components/Write';
import useLocalStorage from '../hooks/useLocalStorage';

const initlist = [
  { id:1, title :'제목제목제목제목제목제목제목제목', content: 'this is content1', writer: 'wrter1', write_date:'2021-10-08'},
  // { id:2, title :'제목제목제목제목제목제목제목제목', content: 'this is content2', writer: 'wrter2', write_date:'2021-10-09'},
  // { id:3, title :'제목제목제목제목제목제목제목제목', content: 'this is content3', writer: 'wrter3', write_date:'2021-10-10'},
  // { id:4, title :'제목제목제목제목제목제목제목제목', content: 'this is content4', writer: 'wrter4', write_date:'2021-10-11'},
  // { id:5, title :'제목제목제목제목제목제목제목제목', content: 'this is content5', writer: 'wrter5', write_date:'2021-10-12'}
];

function List(){
  const [mode, setMode] = useState('list');
  const [list, setList] = useLocalStorage('list', initlist);

  const updateMode = (_mode) => {
    setMode(_mode);
  }

  return (
    <div className="App">      
      <Header></Header>
      <div className="content">
        <Table updateMode={updateMode} list={list}></Table>
        { mode === 'write'? <Write list={list} setList={setList} updateMode={updateMode}></Write> : console.log(mode) }
      </div>
    </div>
  );
}

export default List;
