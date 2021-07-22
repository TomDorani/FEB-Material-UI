import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(3),
		"background-color": "#e05858",
	},
}));
const theme = createMuiTheme({
	direction: "rtl",
});

export const MyPaper = ({ children, ...props }) => {
	const styles = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div dir="rtl">
				<Paper className={styles.root} {...props}>
					{children}
				</Paper>
			</div>
		</ThemeProvider>
	);
};
