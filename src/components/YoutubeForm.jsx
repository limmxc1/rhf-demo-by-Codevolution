import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const YoutubeForm = () => {

	const form = useForm()
	const { register, control, handleSubmit, formState } = form 
	const { errors } = formState
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
					<p className="error">{errors.username?.message}</p>
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
							validate: { // enables writing of custom validation
								notAdmin: (fieldValue) => { // automatically receives 'fieldValue' as the argument
									return (
										fieldValue !== 'admin@example' ||
										"Enter a different email address"
									);
								},
								notBlackListed: (fieldValue) => { // automatically receives 'fieldValue' as the argument
									return (
										!fieldValue.endsWith('baddomain.com') || 
										"This domain is not supported"
									)
								}
							} // 1 custom rule = pass function, >1 custom rule = pass object
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
