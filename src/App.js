import React from "react";
import Router from "./Router";

import { Provider } from "react-redux";
import { store } from "./store/index";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
