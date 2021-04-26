import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Favourite } from "./pages";
import { Navbar } from "./components";
import { fetchBreeds } from "./store/actions/breeds";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-20">
        <Switch>
          <Route path="/favourite">
            <Favourite />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
