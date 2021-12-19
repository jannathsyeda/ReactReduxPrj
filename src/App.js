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
import {Provider} from 'react-redux';
import store from './Redux/Store'
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Nav/>
    <Switch>
    <Route exact path='/'>
            <Home/>
    </Route>
     
      <Route path='/edit-user/:id' component={EditUser}/>
        {/* <EditUser/>
        </Route> */}
      <Route path="/registration">
        <Registration/>
      </Route>
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
