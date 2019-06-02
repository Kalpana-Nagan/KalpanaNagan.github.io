import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'jquery/src/jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
    	<App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
