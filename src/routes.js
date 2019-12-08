import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterPage from "./pages/CharacterPage";
import ComicsPage from "./pages/ComicsPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters" exact component={Characters} />
      <Route path="/events" component={Comics} />
      <Route path="/characters/:id" component={CharacterPage} />
      <Route path="/comics/:id" component={ComicsPage} />
    </Switch>
  );
}
