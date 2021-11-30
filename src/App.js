import logo from './logo.svg';
import './App.css';
import Nav from './widgets/Nav';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import EditUser from './components/EditUser';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Nav/>
    <Switch>
    <Route exact path='/'>
            <Home/>
    </Route>
     
      <Route path="/edituser/:id" >
        <EditUser/>
        </Route>
      <Route path="/registration">
        <Registration/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
