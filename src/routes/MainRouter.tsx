import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/">
          <Redirect to="/" />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
