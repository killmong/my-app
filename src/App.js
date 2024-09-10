/* eslint-disable react/jsx-no-undef */
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Firstgame from "./firstgame/Firstgame";
import logo from "./logo.svg";
import "./App.css";
import Articles from "./articles/Articles";

function App() {
  return (
    <Router>
      {/* Add routing structure */}
      <Routes>
        {/* Default route - will render Firstgame */}
        <Route path="/" element={<Firstgame />} />

        {/* Route for My Learning Section */}
        <Route path="/FirstArticle" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;
