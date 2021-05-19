import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomeRouter } from './components/pages/Home/homeRouter';
import { AddBookRouter } from './components/pages/AddBook/addBookRouter';
import { EditBookRouter } from './components/pages/EditBook/editBookRouter';
import { LoginRouter } from './components/pages/Login/loginRouter';
import { SignUpRouter } from './components/pages/SignUp/signUpRouter';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomeRouter} />
      <Route exact path="/add" component={AddBookRouter} />
      <Route exact path="/edit" component={EditBookRouter} />
      <Route exact path="/login" component={LoginRouter} />
      <Route exact path="/sign-up" component={SignUpRouter} />
    </Switch>
  );
}

export default App;
