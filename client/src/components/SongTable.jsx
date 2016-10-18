var React = require('react')
var SongRow = require('./SongRow')

var SongTable = function (props){

  var songNodes = props.songs.map(function(song, index) {
    return (
      <li key= {index}>
        <SongRow song={song} />
      </li>
    )
  })

  return(
    <div className='song-table'>
      <ol>
        {songNodes}
      </ol>
    </div>
  )
}

module.exports = SongTable