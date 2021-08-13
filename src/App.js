import './App.css';
import Calculator from'./components/Calculator.js';
import React  from 'react';
import {BrowserRouter, Route} from 'react-router';
class  App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route component={Calculator} path="/" exact/>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
