import { EmailForm } from '@/components/EmailForm';

export default function Home() {
	return (
		<main className="container flex max-w-lg flex-col justify-center gap-4">
			<div>
				<h1 className="text-4xl text-orange-500">Can I Podcast?</h1>
				<p>
					See and compare podcasting features across podcast apps and hosting
					providers.
				</p>
			</div>
			<EmailForm />
		</main>
	);
}
