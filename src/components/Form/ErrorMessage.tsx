import { getFieldErrorMessages } from "@/utils/forms";
import { useFormContext } from "react-hook-form";

type IErrorMessageProps = {
	field: string;
};

export function ErrorMessage({ field }: IErrorMessageProps) {
	const { formState: { errors } } = useFormContext();

	const fieldError = getFieldErrorMessages(errors, field);

	if (!fieldError) return null;

	return (
		<span className="text-xs text-red-500 mt-1">{fieldError.message?.toString()}</span>
	)
}
