import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from './pages/Login';
import Game from './pages/Game';
import SignUp from './pages/SignUp';
import LogHeader from "./components/LogHeader";
import Users from "./utils/Users";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

function App() {
  const [authorization, setAuth] = useState(false);

  useEffect(() => {
    Users.auth().then(res => {
      console.log(res);
      setAuth(res.data);
    })
  })

  return (
    <Router>
      <div>
        <QueryClientProvider client={queryClient}>

          {authorization ? <LogHeader /> : <Header />}
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </QueryClientProvider>
      </div>
    </Router>
  );
}

export default App;
