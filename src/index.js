import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeEn from "./HomeEn"
import HomeEs from "./HomeEs"
import HomePl from "./HomePl"
import ProjectsEn from "./ProjectsEn"
import ProjectsEs from "./ProjectsEs"
import ProjectsPl from "./ProjectsPl"
import './index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  
  <Router>
        <div style={{backgroundColor: "red"}}>
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
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
