import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "Components/Header";
import NotFound from "Components/NotFound";

// const domain = "/nomflix";
const domain = "";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path={`${domain}/`} exact component={Home} />
        <Route path={`${domain}/tv`}  component={TV} />
        {/* <Route path="/tv" exact component={TV} /> */}
        {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>} /> */}
        <Route path={`${domain}/search`} component={Search} />
        <Route path={`${domain}/movie/:id`} component={Detail} />
        <Route path={`${domain}/show/:id`} component={Detail} />
        <Route path={`${domain}/404`} component={NotFound} />
        <Redirect from="*" to={`${domain}/404`} />
      </Switch>
    </>
  </Router>
);