import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Button } from "@material-ui/core";
import Amplify, { Analytics } from "aws-amplify";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

Analytics.autoTrack("pageView", {
	enable: true,
	type: "SPA",
});

Analytics.autoTrack("event", {
	enable: true,
});

function App() {
	Analytics.record({ name: "albumVisit" });
	return (
		<div className="App">
			<AmplifySignOut />
			<header>
				<img src={logo} className="App-logo" alt="logo" />
				<h1>We now have Auth!</h1>
			</header>
			<Button
				color="primary"
				onClick={() => {
					Analytics.record({ name: "albumVisitAfter" });
					alert("Hey you doin' it Wrong");
				}}
			>
				Hello World
			</Button>
			;
		</div>
	);
}

export default withAuthenticator(App);
