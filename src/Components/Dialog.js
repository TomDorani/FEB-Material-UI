import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Wizard from "./wizard/Wizard";
export default function ScrollDialog(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => () => {
		setOpen(true);
	};

	const handleClose = () => {
		props.onExit();
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClickOpen()}>New Day</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll={"body"}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
				<DialogContent>
					<Wizard close={handleClose} />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} variant="contained" color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
