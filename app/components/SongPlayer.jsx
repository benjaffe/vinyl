import React from "react";
import YouTube from "react-youtube";

import styles from "./SongPlayer.css";

export default class SongPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null
    };
  }

  render() {
    const opts= {
      playerVars: {
        autoplay: 1
      }
    };

    return <div>
      Song Player!
      <YouTube
        className={styles.player}
        url={this.props.songs[0].url}
        // opts={opts}
        onReady={this._onReady.bind(this)}
      />
    </div>;
  }

  _onReady(e) {
    console.log("HI!!!!!");
    this.state.player = e.target;
    window.player = this.state.player;
  }
}
