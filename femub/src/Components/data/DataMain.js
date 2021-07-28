import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "./Table";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

export default function DataMain() {
	const classes = useStyles();
	const [selectedDate, handleDateChange] = useState(new Date());

	return (
		<div className={classes.root}>
			<Paper elevation={2}>
				<Table date={selectedDate} />
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
