import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/HomeDashboard/Home";
import TableStatistics from "./containers/TableStatistics/TableStatistics";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'}><Home/></Route>
        <Route  path={'/statistics'}><TableStatistics/></Route>
      </Switch>
    </div>
  );
}

export default App;
