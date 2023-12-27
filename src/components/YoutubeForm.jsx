import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const YoutubeForm = () => {

	const form = useForm()
	const { register, control, handleSubmit } = form

	const onSubmit = (data) => {
		// handleSubmit passes the form data to this onSubmit function, allowing logging to console
		console.log('Form submitted', data) 
		// inspect browser to check data has been logged to console
	}

	return (
		<div>
			<h1>Youtube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					{...register("username")}
				></input>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					{...register('email')}
				></input>
				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					{...register('channel')}
				></input>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
