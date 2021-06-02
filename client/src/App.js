import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import ModalRoot from "./modules/modals/components/ModalRoot.js";
import Login from './Pages/Login';
import Game from './Pages/Game';
import SignUp from './Pages/SignUp';

function App() {
  const [auth, setAuth]=useState(false);


  return (
    <div>
      <ModalRoot />
      <Router>
      <Header />
      <Switch>
      <Route exact path="/">
        {auth ? <Redirect to="/login"/> : <Home/>}
      </Route>
      <Route exact path="/search" component={Search}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/game" component={Game}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;