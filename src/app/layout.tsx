import './globals.css';

import { Metadata } from 'next';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stud.io',
	description: 'Plataforma de formação de sinapses cerebrais',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-BR">
			<body className={nunito.className}>{children}</body>
		</html>
	)
}
