'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import {
	ActiveCampaignInputs,
	handleActiveCampaignSubmit,
} from 'active-campaign-react';
import { useState } from 'react';

const formSchema = z.object({
	email: z.string().email({
		message: 'Please enter a valid email address.',
	}),
});

export function EmailForm() {
	const formId = '25';
	const [subscribed, setSubscribed] = useState(false);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const result = await handleActiveCampaignSubmit(
			values,
			process.env.NEXT_PUBLIC_ACTIVECAMPAIGN_SUBDOMAIN!,
			formId
		);
		setSubscribed(true);
	}

	return (
		<>
			{subscribed ? (
				<p>Thanks! Please check your email to confirm your subscription!</p>
			) : (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Enter your email address to be notified when we launch!
									</FormLabel>
									<FormControl>
										<Input placeholder="email address" {...field} />
									</FormControl>
									<FormDescription>
										We will use this only to notify you about Can I Podcast? and
										will not sell your information.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit">Notify me!</Button>
					</form>
				</Form>
			)}
		</>
	);
}
