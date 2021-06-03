import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import ModalRoot from "./modules/modals/components/ModalRoot.js";
import Login from './Pages/Login';
import Game from './Pages/Game';
import SignUp from './Pages/SignUp';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [auth, setAuth]=useState(false);


  return (
    <div>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
