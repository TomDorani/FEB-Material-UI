import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(6),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));
const theme = createMuiTheme({
	// direction: "rtl",
});

export const MainContainer = ({ children, ...props }) => {
	const styles = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Container
				className={styles.root}
				component="main"
				maxWidth="xl"
				{...props}
			>
				{children}
			</Container>
		</ThemeProvider>
	);
};
