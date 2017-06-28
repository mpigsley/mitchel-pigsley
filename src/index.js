import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './components/home';
import Services from './components/services';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css';
import 'skeleton.css/skeleton.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
