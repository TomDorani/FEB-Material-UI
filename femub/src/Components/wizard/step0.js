import React, { useState } from "react";

import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { MainContainer } from "./MainContainer";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const Step0 = (props) => {
	const [selectedDate, handleDateChange] = useState(new Date());
	const { actions, state } = useStateMachine({ updateAction });

	const onSubmit = (data) => {
		console.log("data", data);
		actions.updateAction(data);
		props.next();
	};

	return (
		<MainContainer>
			<label>
				For Date:
				<label>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DatePicker
							variant="inline"
							value={selectedDate}
							onChange={handleDateChange}
						/>
					</MuiPickersUtilsProvider>
				</label>
			</label>
			<button
				type="submit"
				onClick={() => {
					onSubmit({ date: selectedDate });
				}}
			>
				next
			</button>
		</MainContainer>
	);
};

export default Step0;
