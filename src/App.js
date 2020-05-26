import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import Nav from './components/Nav';
import FirstPage from './pages/FirstPage';
import SecretPage from './pages/SecretPage';

function App() {
  return (
    <div className="App">
      <h1>My Amazing React App</h1>
      <Router>
        <Nav /> 
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/one" component={FirstPage} />
          <Route exact path="/two" component={SecondPage} />
          <Route exact path="/three" component={ThirdPage} />
          <Route component={SecretPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
