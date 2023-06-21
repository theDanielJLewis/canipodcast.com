import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Can I Podcast?',
	// description: '',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark:dark">
			<body
				suppressHydrationWarning={true}
				className={
					inter.className + ' flex min-h-screen flex-col transition-colors'
				}
			>
				{/* <Header /> */}
				<div className="flex shrink grow overflow-hidden">{children}</div>
				{/* <Footer /> */}
			</body>
		</html>
	);
}
