'use client'

import * as Form from '@/components/Form';
import { useForm, FormProvider } from 'react-hook-form';

export default function RegisterProfile() {
	const registerProfileForm = useForm();

	const { handleSubmit } = registerProfileForm;

	return (
		<div className="flex flex-col items-center h-[100%] max-w-[100%] border-black">
			<h1 className="text-slate-900 text-3xl font-bold max-w-[465px] w-[100%] mt-5">Criar seu perfil de acesso à plataforma</h1>

			<p className="text-slate-900 font-semibold max-w-[465px] w-[100%] mt-5">
				Já está cadastrado? <a href="#" className="text-slate-900 hover:text-slate-950 font-bold underline">Clique para entrar</a>
			</p>

			<FormProvider {...registerProfileForm}>
				<form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col items-center justify-center max-w-[465px] w-[100%] gap-[20px] mt-5">
					<fieldset className="w-[100%]">
						<Form.Label htmlFor="name">Nome</Form.Label>

						<Form.Input
							type="text"
							placeholder="Digite o seu nome"
							name="name"
						/>
					</fieldset>

					<fieldset className="w-[100%]">
						<Form.Label htmlFor="email">E-mail</Form.Label>

						<Form.Input
							type="email"
							placeholder="Digite o seu e-mail principal"
							name="email"
						/>
					</fieldset>

					<div className="flex w-[100%] gap-5">
						<fieldset className="w-[50%]">
							<Form.Label htmlFor="password">Senha</Form.Label>

							<Form.Input
								type="password"
								placeholder="Crie uma senha"
								name="password"
							/>
						</fieldset>

						<fieldset className="w-[50%]">
							<Form.Label htmlFor="confirmPassword">Confirmar senha</Form.Label>

							<Form.Input
								type="password"
								placeholder="Repita sua senha"
								name="confirmPassword"
							/>
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
