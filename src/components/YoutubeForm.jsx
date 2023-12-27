import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const YoutubeForm = () => {
	
	const form = useForm()
	const { register, control } = form // destructure the control method and pass it to <DevTool>

	return (
		<div>
			<form>
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
			<DevTool control={control} /> {/* Make sure it comes after <form> */}
		</div>
	);
};
