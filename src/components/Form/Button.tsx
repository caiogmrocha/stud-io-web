import { ButtonHTMLAttributes } from "react";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	outline?: boolean;
	block?: boolean;
	variant?: 'primary';
};

export function Button({
	children,
	outline = false,
	block = false,
	variant = 'primary',
	className,
	...props
}: IButtonProps) {
	const defaultClasses = [
		'flex',
		'justify-start',
		'items-center',
		'border-2',
		'font-semibold',
		'outline-none',
		'rounded-md',
		'px-3',
		'py-2',
		'transition',
		'focus:ring-2',
		'hover:brightness-75',
		'active:brightness-50',
		'active:ring-3',
	];

	const outlineClasses = [
		''
	];

	const blockClasses = [
		'w-[100%]',
	];

	// Variants
	const primaryVariantClasses = [
		'border-slate-900',
		'bg-slate-900',
		'text-slate-100',
		'focus:border-slate-900',
		'focus:ring-slate-400',
	];

	const primaryOutlineVariantClasses = [
		'border-slate-900',
		'bg-slate-100',
		'text-slate-900',
		'focus:border-slate-900',
		'focus:ring-slate-400',
	];

	type IMapVariantsClasses = {
		[key in Exclude<IButtonProps['variant'], undefined>]: {
			[key in `${boolean}`]: string[];
		};
	};

	const mapVariantsClasses: IMapVariantsClasses = {
		primary: {
			false: primaryVariantClasses,
			true: primaryOutlineVariantClasses,
		},
	};

	return (
		<button
			className={
				className + [
					...defaultClasses,
					...(block ? blockClasses : []),
					...mapVariantsClasses[variant][`${outline}`]
				].join(' ')
			}
			{...props}
		>{children}</button>
	);
}
