'use client'

import * as Form from '@/components/Form';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';

export default function RegisterProfile() {
	const registerProfileSchema = z.object({
		name: z.string().nonempty({
			message: 'Este campo é obrigatório.',
		}),
		email: z.string().email({
			message: 'Este campo deve ser um e-mail válido.',
		}).nonempty({
			message: 'Este campo é obrigatório.',
		}).toLowerCase(),
		password: z.string().nonempty({
			message: 'Este campo é obrigatório.',
		}).min(12, {
			message: 'Este campo deve ter, no mínimo, 12 caracteres.',
		}),
		confirmPassword: z.string().nonempty({
			message: 'Este campo é obrigatório',
		}).min(12, {
			message: 'Este campo deve ter, no mínimo, 12 caracteres.',
		}),
		type: z.enum(['student', 'teacher']),
	}).superRefine(({ password, confirmPassword }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: 'custom',
				message: 'As senhas não correspondem.',
				path: ['confirmPassword'],
			});
		}
	});

	type IRegisterProfileData = z.infer<typeof registerProfileSchema>;

	const registerProfileForm = useForm<IRegisterProfileData>({
		resolver: zodResolver(registerProfileSchema),
	});

	async function handleRegisterProfileFormSubmit(data: IRegisterProfileData) {
		const response = await fetch(`${process.env.apiUrl}/profiles`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		if ([200, 201].includes(response.status)) {
			console.log('Perfil registrado com sucesso', response.status);
		} else {
			console.log('Erro ao tentar registrar o perfil: ', response.status, await response.json());
		}
	}

	const { handleSubmit } = registerProfileForm;

	return (
		<div className="flex flex-col items-center h-[100%] max-w-[100%] border-black">
			<h1 className="text-slate-900 text-3xl font-bold max-w-[465px] w-[100%] mt-5">Criar seu perfil de acesso à plataforma</h1>

			<p className="text-slate-900 font-semibold max-w-[465px] w-[100%] mt-5">
				Já está cadastrado? <a href="#" className="text-slate-900 hover:text-slate-950 font-bold underline">Clique para entrar</a>
			</p>

			<FormProvider {...registerProfileForm}>
				<form onSubmit={handleSubmit(handleRegisterProfileFormSubmit)} className="flex flex-col items-center justify-center max-w-[465px] w-[100%] gap-[20px] mt-5">
					<fieldset className="w-[100%]">
						<Form.Label htmlFor="name">Nome</Form.Label>

						<Form.Input
							type="text"
							placeholder="Digite o seu nome"
							name="name"
						/>

						<Form.ErrorMessage field="name" />
					</fieldset>

					<fieldset className="w-[100%]">
						<Form.Label htmlFor="email">E-mail</Form.Label>

						<Form.Input
							type="email"
							placeholder="Digite o seu e-mail principal"
							name="email"
						/>

						<Form.ErrorMessage field="email" />
					</fieldset>

					<div className="flex w-[100%] gap-5">
						<fieldset className="w-[50%]">
							<Form.Label htmlFor="password">Senha</Form.Label>

							<Form.Input
								type="password"
								placeholder="Crie uma senha"
								name="password"
							/>

							<Form.ErrorMessage field="password" />
						</fieldset>

						<fieldset className="w-[50%]">
							<Form.Label htmlFor="confirmPassword">Confirmar senha</Form.Label>

							<Form.Input
								type="password"
								placeholder="Repita sua senha"
								name="confirmPassword"
							/>

							<Form.ErrorMessage field="confirmPassword" />
						</fieldset>
					</div>

					<div className="flex w-[100%] gap-5">
						<fieldset className="w-[100%]">
							<Form.Label>Tipo de perfil</Form.Label>

							<div className="flex w-[100%] gap-5 mt-1">
								<Form.Radio id="type-teacher" name="type" value="teacher" container>
									Professor
								</Form.Radio>

								<Form.Radio id="type-student" name="type" value="student" container>
									Estudante
								</Form.Radio>
							</div>

							<Form.ErrorMessage field="type" />
						</fieldset>
					</div>

					<hr className="border-t-2 border-slate-300 w-[100%]" />

					<footer className="flex w-[100%] gap-5">
						<Form.Button type="button" block outline>Voltar</Form.Button>
						<Form.Button type="submit" block>Cadastrar-se</Form.Button>
					</footer>
				</form>
			</FormProvider>
		</div>
	);
}
