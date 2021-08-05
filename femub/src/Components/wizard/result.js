import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { API } from "aws-amplify";
// import awsconfig from "./../../aws-exports";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

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
	const classes = useStyles();
	return (
		<>
			<h2>Result:</h2>

			<TableContainer component={Paper}>
				<Table className={classes.table}>
					<TableRow>
						<TableCell>Sentimental:</TableCell>
						<TableCell>{state["data"]["senti-slider"]}</TableCell>
						<TableCell>{state["data"]["senti-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Prodactive:</TableCell>
						<TableCell>{state["data"]["prod-slider"]}</TableCell>
						<TableCell>{state["data"]["prod-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Energy:</TableCell>
						<TableCell>{state["data"]["energy-slider"]}</TableCell>
						<TableCell>{state["data"]["energy-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Food:</TableCell>
						<TableCell>{state["data"]["food-slider"]}</TableCell>
						<TableCell>{state["data"]["food-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Physical:</TableCell>
						<TableCell>{state["data"]["Physical-slider"]}</TableCell>
						<TableCell>{state["data"]["physical-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Alcohol:</TableCell>
						<TableCell>
							{state["data"]["alcohol-switch"] ? "Yes" : "No"}
						</TableCell>
						<TableCell>{state["data"]["alcohol-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Drugs:</TableCell>
						<TableCell>
							{state["data"]["drugs-switch"] ? "Yes" : "No"}
						</TableCell>
						<TableCell>{state["data"]["drugs-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Sentimental:</TableCell>
						<TableCell>{state["data"]["senti-slider"]}</TableCell>
						<TableCell>{state["data"]["senti-note"]}</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Sentimental:</TableCell>
						<TableCell>{state["data"]["senti-slider"]}</TableCell>
						<TableCell>{state["data"]["senti-note"]}</TableCell>
					</TableRow>
				</Table>
			</TableContainer>
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
					// console.log(putData(state["data"]));
					props.close();
				}}
			>
				send
			</button>
		</>
	);
};

export default Result;
