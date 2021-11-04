import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './Views/List';
import Detail from './Components/Detail';
import Write from './Components/Write';

function Router(){
  return (
    <BrowserRouter>
      <Route path="/" component={List} exact />
      <Route path="/Detail/:id" component={Detail} exact />
      <Route path="/Write" component={Write} exact />
    </BrowserRouter>
  )
}

export default Router;
