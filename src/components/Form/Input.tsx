import { getFieldErrorMessages } from "@/utils/forms";
import { InputHTMLAttributes } from "react";
import { useFormContext } from 'react-hook-form';

type IInputProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
};

export function Input(props: IInputProps) {
	const { register, formState: { errors } } = useFormContext();

	const fieldError = getFieldErrorMessages(errors, props.name);

	const defaultClasses = [
		'flex',
		'justify-start',
		'items-center',
		'w-[100%]',
		'border-2',
		'border-gray-300',
		'placeholder:text-gray-400',
		'font-semibold',
		'outline-none',
		'rounded-md',
		'px-3',
		'py-2',
		'transition',
		'focus:border-slate-900',
		'focus:ring-2',
		'focus:ring-slate-400',
	];

	const invalidClasses = [
		'border-red-500',
		'focus:ring-red-300',
		'focus:border-red-500'
	];

	return (
		<input
			id={props.name}
			className={[
				...defaultClasses,
				...(fieldError ? invalidClasses : []),
			].join(' ')}
			{...register(props.name)}
			{...props}
		/>
	)
}
