import React from "react";
import { Link } from "react-router";

export default class SongItem extends React.Component {
  render() {
    var { id, text, done, sending, onUpdate } = this.props;
    return <div>
      <input type="checkbox" checked={done} onChange={(event) => {
        if(sending) return;
        onUpdate({
          done: event.target.checked
        });
      }}/>
      { sending ?
        <span>{text}</span> :
        <Link to="songitem" params={{item: id}}>{text}</Link>
      }
    </div>;
  }
}
SongItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
};
