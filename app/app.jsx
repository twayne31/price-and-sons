var React = require('react');
var ReactDOM = require('react-dom');
//object destructoring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



//load foundation
$(document).foundation();
//add css styling to the app
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <p>React Boilerplate 3</p>,
  document.getElementById('app')
);
