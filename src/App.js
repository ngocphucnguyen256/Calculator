import './App.css';
import {Route, Switch} from "react-router-dom";
import Calculator from'./components/Calculator.js';
import React  from 'react';
class  App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
           <Calculator/>
        </Route>
      </Switch>
 
    );
  }

}

export default App;
