import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import List from './List';
import Detail from './Components/Detail';

function Router(){
  return (
    <BrowserRouter>
      <Route path="/" component={List} exact />
      <Route path="/Detail/:id" component={Detail} exact />
    </BrowserRouter>
  )
}

export default Router;
