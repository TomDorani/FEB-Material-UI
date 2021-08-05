import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import { Form } from "./Form";
import { Input } from "./Input";
import { MainContainer } from "./MainContainer";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
const Step1 = (props) => {
	const { control, register, handleSubmit } = useForm();
	// eslint-disable-next-line no-unused-vars
	const { actions, state } = useStateMachine({ updateAction });
	const onSubmit = (data) => {
		// console.log("data", data);
		actions.updateAction(data);
		props.next();
	};

	const marks = [
		{
			value: 1,
			label: <MoodBadIcon />,
		},
		{
			value: 10,
			label: <MoodIcon />,
		},
	];

	return (
		<MainContainer>
			<Typography component="h2">How was you day</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<label>
					<label>
						Sentimental
						<Controller
							name="senti-slider"
							control={control}
							defaultValue={5}
							render={({ field }) => (
								<Slider
									{...field}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={1}
									marks={marks}
									min={1}
									max={10}
									onChange={(_, value) => {
										field.onChange(value);
									}}
								/>
							)}
						/>
						<Input
							ref={register("senti-note")}
							name="senti-note"
							type="text"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</label>
					<label>
						Productive
						<Controller
							name="prod-slider"
							control={control}
							defaultValue={5}
							render={({ field }) => (
								<Slider
									{...field}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={1}
									marks={marks}
									min={1}
									max={10}
									onChange={(_, value) => {
										field.onChange(value);
									}}
								/>
							)}
						/>
						<Input
							ref={register("prod-note")}
							name="prod-note"
							type="text"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</label>
					<label>
						Energy
						<Controller
							name="energy-slider"
							control={control}
							defaultValue={5}
							render={({ field }) => (
								<Slider
									{...field}
									aria-labelledby="discrete-slider"
									valueLabelDisplay="auto"
									step={1}
									marks={marks}
									min={1}
									max={10}
									onChange={(_, value) => {
										field.onChange(value);
									}}
								/>
							)}
						/>
						<Input
							ref={register("energy-note")}
							name="energy-note"
							type="text"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</label>
				</label>
				<button type="submit">next</button>
			</Form>
		</MainContainer>
	);
};

export default Step1;
