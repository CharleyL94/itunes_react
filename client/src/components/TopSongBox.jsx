var React = require('react');
var SongTable = require('./SongTable');
var SongRow = require('./SongRow');

  var TopSongBox = React.createClass({
    getInitialState:function(){
      return { songs: [] }
    },

    componentDidMount: function(){
      var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
      var request = new XMLHttpRequest();
      request.open("GET", url);
      var self = this;
      request.onload = function(){
        var songs = JSON.parse(request.responseText)
        console.log(songs.feed.entry)
        self.setState({ songs: songs.feed.entry});
        
      }
      request.send();
    },

  render:function(){
    return(
      <div>
        <h1>Top 20 Song Box</h1>
        <SongTable songs = {this.state.songs}></SongTable>

      </div>
    )
  }
})


module.exports = TopSongBox;