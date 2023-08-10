import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <Login/>
      ): (
        <div className="app_body">
          <Router>
            <Route path="/">
              <Sidebar />
            </Route>
            <Switch>           
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
