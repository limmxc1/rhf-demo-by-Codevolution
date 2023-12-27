import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const YoutubeForm = () => {

	const form = useForm()
	const { register, control, handleSubmit } = form

	const onSubmit = (data) => {
		console.log('Form submitted', data) 
	}

	return (
		<div>
			<h1>Youtube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate> {/* blocks browser validation, lets rhf do the validation */}
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					{...register("username", {
						required: {
							value: true,
							message: "Username is required"
						},
					})} // examples of some of the HTML validation rules supported by rhf
				></input>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					{...register('email', {
						pattern: {
							value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
							message: 'Invalid email format',
						},
					})} // examples of some of the HTML validation rules supported by rhf
				></input>
				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					{...register('channel', {required: "Channel is required"})}
				></input>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
