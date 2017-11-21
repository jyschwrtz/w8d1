import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to='/'><h1>Bench BnB</h1></Link>
      <Route exact path="/" component={GreetingContainer} />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
