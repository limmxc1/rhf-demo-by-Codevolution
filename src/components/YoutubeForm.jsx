import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

export const YoutubeForm = () => {
	const form = useForm({
		defaultValues: {
			username: 'Batman',
			email: '',
			channel: '',
			social: {
				twitter: '',
				facebook: '',
			},
			phoneNumbers: ['', ''],
			phNumbers: [{ number: '' }],
			age: 0,
			dob: new Date(),
		},
	});
	const {
		register,
		control,
		handleSubmit,
		formState,
		watch,
		getValues,
		setValue,
	} = form;
	const { fields, append, remove } = useFieldArray({
		name: 'phNumbers',
		control,
	});

	const { errors, touchedFields, dirtyFields, isDirty } = formState;

	const onSubmit = (data) => {
		console.log('Form submitted', data);
	};

	const handleGetValues = () => {
		console.log('Get values', getValues(['username', 'channel']));
	};
	const handleSetValue = () => {
		setValue('username', '', {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		});
	};

	renderCount++;
	return (
		<div>
			<h1>Youtube Form ({renderCount / 2})</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<div className="form-control">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						disabled // traditional way in HTML. Cannot type in this field anymore
						{...register('username', {
							required: {
								value: true,
								message: 'Username is required',
							},
						})}
					></input>
					<p className="error">{errors.username?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						id="email"
						{...register('email', {
							pattern: {
								value:
									/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: 'Invalid email format',
							},
							validate: {
								notAdmin: (fieldValue) => {
									return (
										fieldValue !== 'admin@example' || 'Enter a different email address'
									);
								},
								notBlackListed: (fieldValue) => {
									return (
										!fieldValue.endsWith('baddomain.com') ||
										'This domain is not supported'
									);
								},
							},
						})}
					></input>
					<p className="error">{errors.email?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						{...register('channel', {
							required: {
								value: true,
								message: 'Channel is required',
							},
						})}
					></input>
					<p className="error">{errors.channel?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						{...register('age', {
							valueAsNumber: true,
							required: {
								value: true,
								message: 'Age is required',
							},
						})}
					></input>
					<p className="error">{errors.age?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="dob">Date of Birth</label>
					<input
						type="date"
						id="dob"
						{...register('dob', {
							valueAsDate: true,
							required: {
								value: true,
								message: 'Date of birth is required',
							},
						})}
					></input>
					<p className="error">{errors.dob?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="twitter">Twitter</label>
					<input
						type="text"
						id="twitter"
						{...register('social.twitter', {
							required: 'Twitter account is required', 
							// no validation message will be flagged in rhf dev tools even if 'required' validation was set
							disabled: watch("channel") === "", // conditonally disabling depending on whether 'channel' field has a value
							// rhf way of disabling field. will return 'undefined' for twitter's field value
						})}
					></input>
					<p className="error">{errors.social?.twitter?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="facebook">Facebook</label>
					<input
						type="text"
						id="facebook"
						{...register('social.facebook', {
							required: {
								value: true,
								message: 'Facebook account is required',
							},
						})}
					></input>
					<p className="error">{errors.social?.facebook?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="primary-phone">Primary phone number</label>
					<input
						type="text"
						id="primary-phone"
						{...register('phoneNumbers.0', {
							required: {
								value: true,
								message: 'Primary phone number is required',
							},
						})}
					></input>
					<p className="error">{errors.phoneNumbers?.[0]?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="secondary-phone">Secondary phone number</label>
					<input
						type="text"
						id="secondary-phone"
						{...register('phoneNumbers.1', {
							required: {
								value: true,
								message: 'Secondary phone number is required',
							},
						})}
					></input>
					<p className="error">{errors.phoneNumbers?.[1]?.message}</p>
				</div>

				<div>
					<label>List of phone numbers</label>
					<div>
						{fields.map((field, index) => {
							return (
								<div
									className="form-control"
									key={field.id}
								>
									<input
										type="text"
										{...register(`phNumbers.${index}.number`)}
									></input>
									{index > 0 && (
										<button
											type="button"
											onClick={() => remove(index)}
										>
											Remove
										</button>
									)}
								</div>
							);
						})}
						<button
							type="button"
							onClick={() => append({ number: '' })}
						>
							Add phone number
						</button>
					</div>
				</div>
				<button>Submit</button>
				<button
					type="button"
					onClick={handleGetValues}
				>
					Get values
				</button>
				<button
					type="button"
					onClick={handleSetValue}
				>
					Set value
				</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};
