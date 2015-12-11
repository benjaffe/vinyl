import React from "react";
import RecordPlayer from "components/RecordPlayer";
import Window from "components/Window";

export default class HomePage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <div>
			<h2>Homepage</h2>
			<RecordPlayer />
			<Window />
		</div>;
	}
}
