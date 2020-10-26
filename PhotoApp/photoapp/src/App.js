import React from 'react'
import { BrowserRouter, Route, Link,  Switch } from "react-router-dom";
// import {Users} from "./Users"
import Portofolio from "./Portofolio";
import Home from "./Home";
import Client from "./Client";


// const Home =() => <h2>Home</h2>;

function App() {
  const navStyle = {
    color: 'white'
  };

  return (
    <BrowserRouter>
    
   <nav>
      <ul>
        <li>
          <Link style={navStyle} to="/">Home</Link>
        </li>
        <li>
          <Link style={navStyle} to="/Portofolio">Portofolio</Link>
        </li>
        <li>
          {/* <Link to="/users">Users</Link> */}
          <Link style={navStyle} to="/Client">Client</Link>
        </li>
      </ul>

    </nav>
    
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/Portofolio" component={Portofolio} />
      {/* <Route path="/users/:id" component={Users} /> */}
      {/* <Route path="/users" component={Users} /> */}
      <Route path="/Client" component={Client}/>
      </Switch>
       </BrowserRouter> 
  );
}
      

export default App;
