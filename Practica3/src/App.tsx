import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container, Dimmer, Loader} from 'semantic-ui-react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import People from "./Components/People";
import Planets from "./Components/Planets";
import Films from "./Components/Films";

function App() {
  
  return (
    <>
      <Router>
       <Navbar />
       <Container>
          <Switch>
          <Route exact path = '/'><Home /></Route>
          <Route exact path ='/people'><People /></Route>
          <Route exact path ='/planets'><Planets /></Route>
          <Route exact path ='/films'><Films /></Route>
          </Switch>
       </Container>
     </Router>
    </>
  );
}

export default App;
