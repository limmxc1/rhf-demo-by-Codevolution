import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

export const YoutubeForm = () => {
	
	let renderCount = 0 
	// to prove that rhf does not cause a re-render, unlike other form state 
	//management methods using controlled inputs (e.g. useState)

	const form = useForm()
	const { register, control } = form

	renderCount++
	return (
		<div>
			<h1>Youtube Form ({renderCount / 2})</h1>
			 {/* divide 2 because React.StrictMode renders components twice 
			 during development mode to detect issues with code */}
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
			<DevTool control={control} />
		</div>
	);
};
