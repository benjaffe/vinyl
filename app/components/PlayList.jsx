import React from "react";
import SongItem from "components/SongItem";

export default class PlayList extends React.Component {
  render() {

    return <div>
      Playlist:
      { this.props.songs ?
        <ul>
          { this.props.songs.map((item) => <li key={item.id}>{item.title}</li>) }
        </ul> :
        <div>No Songs (Yet...)</div>
      }
    </div>;
  }
}
