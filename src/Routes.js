import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Pages/Landing";
import Profiles from "./Pages/Profiles";
import CreateProfile from "./Pages/CreateProfile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/profiles/:userName" component={Profiles} />
        <Route path="/create-profile" component={CreateProfile} />
      </Switch>
    </BrowserRouter>
  );
}
