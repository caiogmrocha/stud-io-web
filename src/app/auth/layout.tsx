import Image from 'next/image';

import React from "react";

type IAuthLayoutProps = {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
	return (
		<div className="flex">
			<main className="m-7">
				<header className="flex items-center">
					<Image
						src="/images/favicon.png"
						alt="Logo"
						height={64}
						width={64}
						quality={100}
					/>

					<h1 className="ml-4 text-[34px] text-slate-900 font-bold">Stud.io</h1>
				</header>

				<section className="flex-1">
					{children}
				</section>
			</main>

			<aside className="">
				<Image
					src="/images/landing-auth.png"
					alt="Landing Auth"
					className="object-contain object-right"
					quality={100}
					fill
				/>
			</aside>
		</div>
	);
}
