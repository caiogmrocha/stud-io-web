import { ReactNode, useEffect, useRef, MouseEvent, useState, useMemo, ChangeEvent } from "react";

import { Label } from "./Label";
import { useFormContext } from "react-hook-form";

type IRadioProps = {
	id: string;
	name: string;
	value: any;
	children: ReactNode;

	container?: boolean;
};

export function Radio({ children, id, name, value, container = false }: IRadioProps) {
	const { register } = useFormContext();

	const defaultClasses = useMemo(() => [
		'relative',
		'flex',
		'font-semibold',
		'before:transition',
		'before:ease-in-out',
		'before:flex',
		'before:flex-row-reverse',
		'before:mr-1',
		'before:h-[20px]',
		'before:w-[20px]',
		'before:rounded-full',
		'before:cursor-pointer',
		'before:border-2',
		'before:bg-slate-100',
		'before:border-gray-300',
		'before:hover:bg-slate-200',
		'peer-checked:before:border-8',
		'peer-checked:before:border-blue-600',
	], []);

	return (
		<div>
			<input
				id={id}
				type="radio"
				className="hidden peer"
				value={value}
				{...register(name)}
			/>

			<Label
				className={[
					...defaultClasses,
					...(container ? ['cursor-pointer'] : []),
				].join(' ')}
				htmlFor={id}
			>
				{children}

			</Label>
		</div>
	);
}
