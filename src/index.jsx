

// 1. import react
import React from 'react';

// 2. import reactdom
import ReactDom from 'react-dom';

//3.  additional imports
import App from "./components/App";

// 4.render our components to the screen
ReactDom.render(<App />, document.querySelector('#root'));
