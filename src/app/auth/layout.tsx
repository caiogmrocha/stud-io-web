import Image from 'next/image';

import React from "react";

type IAuthLayoutProps = {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
	return (
		<div className="flex h-[100vh] w-[100vw] max-w-[100%] max-h-[100%]">
			<main className="flex-1 m-7">
				<header className="flex flex-1 items-center justify-center">
					<Image
						src="/images/favicon.png"
						alt="Logo"
						height={64}
						width={64}
						quality={100}
					/>

					<h1 className="ml-4 text-3xl text-slate-900 font-bold">Stud.io</h1>
				</header>

				<section className="flex-1 justify-center items-center w-[100%] h-[100%]">
					{children}
				</section>
			</main>

			<aside className="relative h-[100%] w-[40%] show sm:hidden">
				<Image
					src="/images/landing-auth.png"
					alt="Landing Auth"
					className="object-cover object-right"
					quality={100}
					fill
				/>
			</aside>
		</div>
	);
}
