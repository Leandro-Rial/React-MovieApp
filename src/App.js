import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Add from './components/Add';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import './App.css';
import './lib/font-awesome/css/all.min.css';
import { MovieProvider } from './context/GlobalState';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route exact path="/watched" component={Watched} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
