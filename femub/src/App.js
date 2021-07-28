import React from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify, { Analytics, API } from "aws-amplify";
import { Container } from "@material-ui/core";
import awsconfig from "./aws-exports";
import "./styles.css";
import { StateMachineProvider, createStore } from "little-state-machine";
import ScrollDialog from "./Components/Dialog";
import DataMain from "./Components/data/DataMain";

Amplify.configure(awsconfig);
API.configure(awsconfig);

Analytics.autoTrack("pageView", {
	enable: true,
	type: "SPA",
});

Analytics.autoTrack("event", {
	enable: true,
});

createStore({
	data: {},
});

function App() {
	const [refresh, setRefresh] = React.useState(true);
	const reload = () => {
		setRefresh(!refresh);
	};
	Analytics.record({ name: "albumVisit" });

	return (
		<StateMachineProvider>
			<div className="App">
				<Container maxWidth="lg">
					<AmplifySignOut />
					<ScrollDialog onExit={reload} />
					<DataMain fresh={refresh} />
				</Container>
			</div>
		</StateMachineProvider>
	);
}

export default withAuthenticator(App);
