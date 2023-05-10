import { LabelHTMLAttributes } from "react";

export function Label({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
	return (
		<label className="font-bold mb-2" {...props}>
			{children}
		</label>
	);
}
