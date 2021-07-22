import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData(1, 3, 2, 6, 5),
	createData(2, 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// {
//     "data": {
//       "senti-note": "senti",
//       "prod-note": "prod",
//       "energy-note": "energy",
//       "senti-slider": 2,
//       "prod-slider": 3,
//       "energy-slider": 6,
//       "food-note": "good",
//       "physical-note": "bicycle",
//       "food-slider": 6,
//       "Physical-slider": 2,
//       "alcohol-switch": true,
//       "drugs-switch": true,
//       "alcohol-note": "beer",
//       "drugs-note": "2"
//     }
//   }
export default function BasicTable() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Day</TableCell>
						<TableCell align="right">Sentimental</TableCell>
						<TableCell align="right">Prodactive</TableCell>
						<TableCell align="right">Energy</TableCell>
						<TableCell align="right">Food</TableCell>
						<TableCell align="right">Physical</TableCell>
						<TableCell align="right">Alcohol</TableCell>
						<TableCell align="right">Drugs</TableCell>
						<TableCell align="right">Notes</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
