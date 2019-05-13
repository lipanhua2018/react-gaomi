import React, { Component } from 'react';
// import Header from './components/assembly/Header';
import Headers from './components/assembly/Headers';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './static/pageStyle/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Route path="/" component={Headers}></Route>
        </Router>
        {/* <Header></Header> */}
      </div>
    );
  }
}

export default App;
