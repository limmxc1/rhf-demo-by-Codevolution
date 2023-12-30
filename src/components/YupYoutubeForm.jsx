import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
	username: yup.string().required('Username is required'),
	email: yup
		.string()
		.email('Email format is not valid')
		.required('Email is required'),
	channel: yup.string().required('Channel is required'),
});

export const YupYoutubeForm = () => {
	const form = useForm({
		defaultValues: {
			username: '',
			email: '',
			channel: '',
		},
		resolver: yupResolver(schema),
	});

	const { register, control, handleSubmit, formState } = form;

	const { errors } = formState;

	const onSubmit = (data) => {
		console.log('Form submitted', data);
	};

	return (
		<div>
			<h1>Yup Youtube Form</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className="form-control">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						{...register('username')}
					></input>
					<p className="error">{errors.username?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						{...register('email')}
					></input>
					<p className="error">{errors.email?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
					></input>
					<p className="error">{errors.channel?.message}</p>
				</div>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
