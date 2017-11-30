import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TvShowPage from "../TvShowPage";
import SearchPage from "../SearchPage";
import "./AppRouter.css";

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/tv-show/:id" component={TvShowPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
