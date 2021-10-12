import { Component, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import Write from './Components/Write';

function App(){
  const [mode, setMode] = useState('view');

  const updateMode = (_mode) => {
    setMode(_mode);
  }

  return (
    <div className="App">      
      <Header></Header>
      <div className="content">
        <List updateMode={updateMode}></List>
        { mode === 'write'? <Write></Write> : console.log(mode) }
        <Write></Write>
      </div>
    </div>
  );
}

export default App;
