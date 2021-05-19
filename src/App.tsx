import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './components/pages/Home/';
import { AddBook } from './components/pages/AddBook';
import { EditBook } from './components/pages/EditBook';
import { Login } from './components/pages/Login';
import { SignUp } from './components/pages/SignUp';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={AddBook} />
      <Route exact path="/edit" component={EditBook} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
  );
}

export default App;
