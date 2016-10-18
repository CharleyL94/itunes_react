var React = require('react');
var ReactDOM = require('react-dom');

var TopSongBox = require('./components/TopSongBox.jsx')

window.onload = function(){
  ReactDOM.render(
    <TopSongBox></TopSongBox>,
    document.getElementById('app')
  );
}
