import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeEn from "./HomeEn"
import HomeEs from "./HomeEs"
import HomePl from "./HomePl"
import ProjectsEn from "./ProjectsEn"
import ProjectsEs from "./ProjectsEs"
import ProjectsPl from "./ProjectsPl"

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/es">
            <HomeEs />
          </Route>
          <Route path="/pl">
            <HomePl />
          </Route>
          <Route path="/projects">
            <ProjectsEn />
          </Route>
          <Route path="/esprojects">
            <ProjectsEs />
          </Route>
          <Route path="/plprojects">
            <ProjectsPl />
          </Route>
          <Route path="/">
            <HomeEn />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
