import React from "react";

import { GlobalProvider } from "./context";
import Routes from "./Routes";

const App = () => {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
};

export default App;
