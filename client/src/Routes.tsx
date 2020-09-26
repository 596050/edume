import React from "react";
import { Flex } from "@rebass/grid";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./view";

const Routes = () => {
  return (
    <Router>
      <Flex width="100%" flexDirection="column" height="100%">
        <Switch>
          <Route path={["/"]} exact component={Home} />
          <Route render={() => <>Not Found</>} />
        </Switch>
      </Flex>
    </Router>
  );
};

export default Routes;
