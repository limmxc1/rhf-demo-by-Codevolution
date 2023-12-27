import React from 'react';
import { useForm } from 'react-hook-form'

export const YoutubeForm = () => {
	
	const form = useForm() // returns a form object with many properties
	
	return (
		<div>
			<form>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
				></input>
				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					name="email"
				></input>
				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					name="channel"
				></input>
				<button>Submit</button>
			</form>
		</div>
	);
};
