import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Events from "./pages/Events";
import CharacterPage from "./pages/CharacterPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters" exact component={Characters} />
      <Route path="/events" component={Events} />
      <Route path="/characters/:id" component={CharacterPage} />
    </Switch>
  );
}
