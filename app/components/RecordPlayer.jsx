import React from "react";
import RecordView from "components/RecordView";
import SongPlayer from "components/SongPlayer";
import PlayList from "components/PlayList";

export default class RecordPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [{
        id: 0,
        title: "Joe Pass Hannover: Stormy Weather",
        url: "https://www.youtube.com/watch?v=teXOPAFMOp0"
      }],
      progress: 32.4 //seconds into the playlist
    };
  }

  render() {
    return <div>
      <RecordView />
      <PlayList songs={this.state.songs} />
      <SongPlayer songs={this.state.songs} />
    </div>;
  }
}
