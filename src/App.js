import './App.css';
import Calculator from'./components/Calculator.js';
import React  from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
class  App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route component={Calculator} path="/" exact/>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
