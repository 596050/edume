import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme, ThemeProvider } from "./util";
import { GlobalStyles } from "./App.styles";

const Root = hot(() => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
));

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
