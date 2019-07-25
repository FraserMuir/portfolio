import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";

export const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
  </BrowserRouter>
);
