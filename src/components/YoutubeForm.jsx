import React from 'react';
import { useForm } from 'react-hook-form'

export const YoutubeForm = () => {
	
	const form = useForm() // returns a form object with many properties
	const { register } = form
	// const { name, ref, onChange, onBlur }  = register("username") // returns 4 methods that we need to hook into form contro
	
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					// name={name}
					// ref={ref}
					// onChange={onChange}
					// onBlur={onBlur}
					{...register("username")} // instead of the 4 props above, we can just spread 'register'
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
		</div>
	);
};
