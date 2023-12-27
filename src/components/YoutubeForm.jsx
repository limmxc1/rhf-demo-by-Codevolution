import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const YoutubeForm = () => {

	const form = useForm()
	const { register, control, handleSubmit, formState } = form 
	// formState contains numerous about the form's state, including those shown in rhf-dev-tools
	const { errors } = formState
	// console.log(errors) // returns an object whose properties depends on number of inputs with validation error
	const onSubmit = (data) => {
		console.log('Form submitted', data) 
	}

	return (
		<div>
			<h1>Youtube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className='form-control'>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						{...register("username", {
							required: {
								value: true,
								message: "Username is required"
							},
						})} 
					></input>
					<p className="error">{errors.username?.message}</p> {/* '?' indicates optional chaining, if errors.username is true */}
				</div>
				<div className='form-control'>
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						{...register('email', {
							pattern: {
								value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
								message: 'Invalid email format',
							},
						})}
					></input>
					<p className="error">{errors.email?.message}</p>
				</div>
				<div className='form-control'>
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						{...register('channel', {
							required: {
								value: true,
								message: "Channel is required"
							},
						})}
					></input>
					<p className="error">{errors.channel?.message}</p>
				</div>
				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
