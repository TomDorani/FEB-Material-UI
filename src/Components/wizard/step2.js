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
import Switch from "@material-ui/core/Switch";
const Step2 = (props) => {
	const { control, register, handleSubmit, watch } = useForm();
	// eslint-disable-next-line no-unused-vars
	const { actions, state } = useStateMachine({ updateAction });
	const watchAlcohol = watch("alcohol-switch", false);
	const watchDrugs = watch("drugs-switch", false);
	const onSubmit = (data) => {
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
			<Typography component="h1">What did you do:</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<label>
					<label>
						Food consumption
						<Controller
							name="food-slider"
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
						short description (junk, healthy, on time)
						<Input
							ref={register("food-note")}
							name="food-note"
							type="text"
							label="how did you eat"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</label>

					<label>
						Physical activity
						<Controller
							name="Physical-slider"
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
						short description (training?, long walk, on the chair all day)
						<Input
							ref={register("physical-note")}
							name="physical-note"
							type="text"
							label="how did you train"
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</label>
					<label>
						<label>Substence consumption</label>
						<br />
						<label>
							Alcohol:
							<Controller
								name="alcohol-switch"
								control={control}
								defaultValue={false}
								render={({ field }) => (
									<Switch
										onChange={(e) => field.onChange(e.target.checked)}
										checked={field.value}
									/>
								)}
							/>
							{watchAlcohol && (
								<Input
									ref={register("alcohol-note")}
									name="alcohol-note"
									defaultValue=""
									type="text"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							)}
						</label>
						<label>
							Drugs:
							<Controller
								name="drugs-switch"
								control={control}
								defaultValue={false}
								render={({ field }) => (
									<Switch
										onChange={(e) => field.onChange(e.target.checked)}
										checked={field.value}
									/>
								)}
							/>
							{watchDrugs && (
								<Input
									ref={register("drugs-note")}
									name="drugs-note"
									type="text"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							)}
						</label>
					</label>
					<br />

					<button
						type="back"
						onClick={() => {
							props.back();
						}}
					>
						back
					</button>
					<button type="submit">next</button>
				</label>
			</Form>
		</MainContainer>
	);
};

export default Step2;
