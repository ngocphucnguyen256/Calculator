import './App.css';
import Calculator from'./components/Calculator.js';
import React  from 'react';
import {BrowserRouter, Route} from 'react-router';
class  App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
          <Route exact path="/">
              <Calculator/>
          </Route>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
