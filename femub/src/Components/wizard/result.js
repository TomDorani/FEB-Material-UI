import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { API } from "aws-amplify";
import awsconfig from "./../../aws-exports";
const Result = (props) => {
	const { state } = useStateMachine(updateAction);
	async function putData(record) {
		const apiName = "CYSAPI";
		const path = "/records";
		const myInit = {
			// OPTIONAL
			body: { record }, // replace this with attributes you need
			headers: {}, // OPTIONAL
		};

		return await API.put(apiName, path, myInit);
	}

	return (
		<>
			<h2>Result:</h2>
			<pre>{JSON.stringify(state, null, 2)}</pre>{" "}
			<button
				type="back"
				onClick={() => {
					props.back();
				}}
			>
				back
			</button>
			<button
				type="back"
				onClick={() => {
					console.log(putData(state["data"]));
				}}
			>
				send
			</button>
		</>
	);
};

export default Result;
