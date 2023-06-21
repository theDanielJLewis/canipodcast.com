import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EmailForm } from '@/components/EmailForm';

export default function Home() {
	return (
		<main className="container flex max-w-lg flex-col justify-center gap-4 text-center">
			<div>
				<h1 className="text-orange-500">Can I Podcast?</h1>
				<p>
					See and compare podcasting features across podcast apps and hosting
					providers.
				</p>
				<p>Enter your email address to be notified when we launch!</p>
			</div>
			<EmailForm />
		</main>
	);
}
