import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import Contact from "./Contact"
import NotFound from "./NotFound"


const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
  
)

export default App;
