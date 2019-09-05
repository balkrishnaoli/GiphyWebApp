import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/NavBar/Search";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <br />
        <Route path="/" exact component={() => <Home query={"trending"} />} />
        <Route
          path="/Reactions"
          component={() => <Home query={"Reactions"} />}
        />
        <Route
          path="/Entertainment"
          component={() => <Home query={"Entertainment"} />}
        />
        <Route path="/Sports" component={() => <Home query={"Sports"} />} />
        <Route path="/Stickers" component={() => <Home query={"Stickers"} />} />
        <Route path="/Artists" component={() => <Home query={"Artists"} />} />
        <Route path="/search/:term" component={Search} />
      </div>
    </Router>
  );
};

export default App;
