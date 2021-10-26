import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import Results from "./components/ResultsRedux";
import storeGlobal from "./redux/store";
import { Provider } from "react-redux";

const store = storeGlobal;

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <div className="display-flex-ai-jc heading-banner">
            <h1>Hey Will</h1>
          </div>
          <Switch>
            <Route
              exact
              path="/"
              component={Form}
            />
            <Route
              exact
              path="/results"
              component={Results}
            />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);

/* code below makes so that browser does not
even reloaded the webpage.
It just loads the new javascript on the fly. 
*/

if (module.hot) {
  module.hot.accept();
}
