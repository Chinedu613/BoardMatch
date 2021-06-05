import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Login from './Pages/Login';
import Game from './Pages/Game';
import SignUp from './Pages/SignUp';
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
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          {authorization ? <LogHeader /> : <Header />}
          <Switch>
            <Route exact path="/" >
            <Home/>
            </Route>
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/game" component={Game} />
            <Route path="/test" render={() => (<div>Cheese</div>)} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
