import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Home from "./components/Pages/Home";
import Search from "./components/Pages/Search";
import ModalRoot from "./modules/modals/components/ModalRoot.js";

function App() {
  return (
    <div>
      <ModalRoot />
      <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/search" component={Search}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
