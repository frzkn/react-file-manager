import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import FilesContainer from './FilesContainer';
import Header from "./Header";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/" component={FilesContainer} />
      </Switch>
    </main>
  );
}


export default App;
