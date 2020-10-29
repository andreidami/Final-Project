import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Portofolio from "./Portofolio";
import Home from "./Home";
import RequestPhoto from "./RequestPhoto"


function App() {
  const navStyle = {
    color: "white",
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={navStyle} to="/Portofolio">
              Portofolio
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/Portofolio" exact component={Portofolio} />
        <Route path="/Portofolio/:id" component={RequestPhoto} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
