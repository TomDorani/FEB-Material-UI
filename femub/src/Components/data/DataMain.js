import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "./Table";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { API } from "aws-amplify";
import awsconfig from "./../../aws-exports";
// Amplify.configure(awsconfig);
API.configure(awsconfig);
const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));
function getData() {
	const apiName = "CYSAPI";
	const path = "/records";
	// const myInit = { // OPTIONAL
	//   headers: {}, // OPTIONAL
	// };

	return API.get(apiName, path);
}

(async function () {
	const response = await getData();
	console.log("res", response);
})();
getData();

export default function DataMain() {
	const classes = useStyles();
	const [selectedDate, handleDateChange] = useState(new Date());
	return (
		<div className={classes.root}>
			<Paper elevation={2}>
				<Table />
				<div component="span">
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker
							variant="inline"
							views={["month", "year"]}
							openTo="month"
							animateYearScrolling
							value={selectedDate}
							onChange={handleDateChange}
						/>
					</MuiPickersUtilsProvider>
				</div>
			</Paper>
		</div>
	);
}
