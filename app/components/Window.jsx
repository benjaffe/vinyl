import React from "react";
import styles from "./Window.css";

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowOpen: true
    };
  }

  render() {
    let windowStyle = {
      backgroundImage: `url(window-${this.state.windowOpen ? 'open' : 'closed'}.png)`
    };

    return <div>
      <div className={styles.window} style={windowStyle}>
        <div className={styles.background} />
        {/*canvas of rain goes here*/}
      </div>
    </div>;
  }
}
