"use client";

import { FC } from "react";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";

interface ProductDialogueProps {
	product: string;
}

const ProductDialogue: FC<ProductDialogueProps> = ({ product }) => {
	const FormSchema = z.object({
		email: z
			.string({
				required_error: "Please enter an email.",
			})
			.email(),
		name: z
			.string({ required_error: "Please enter your name." })
			.nonempty({ message: "Please enter your name." }),
		company: z
			.string({ required_error: "Please enter your company name." })
			.nonempty({ message: "Please enter your company name." }),
		product: z
			.string({ required_error: "Please enter a product." })
			.nonempty({ message: "Please enter a product." }),
		message: z
			.string({ required_error: "Please enter a message." })
			.nonempty({ message: "Please enter a message." })
			.min(4, { message: "Message must have at least 4 letters" }),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = form;

	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const templateParams = {
			from_email: data.email,
			from_name: data.name,
			from_company: data.company,
			product: data.product,
			message: data.message,
		};

		try {
			await emailjs.send(
				`${process.env.serviceId}`,
				`${process.env.templateId}`,
				templateParams,
				`${process.env.publicKey}`
			);
		} catch (error) {
			console.log(error);
		}

		toast({
			title: "Successfully Submitted!",
			variant: "success",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						Name: {data.name} <br />
						Email: {data.email} <br />
						Company: {data.company} <br />
						Product: {data.product} <br />
					</code>
				</pre>
			),
		});
		reset();
		document.getElementById("closeDialog")?.click();
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="white">Request a Quote</Button>
			</DialogTrigger>
			<DialogContent className="w-5/6 h-3/4 bg-white">
				<DialogHeader>
					<DialogTitle>Request a Quote for &quot;{product}&quot;</DialogTitle>
					<DialogDescription>
						Click submit at the bottom when you&apos;re done.
					</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="grid gap-4 px-2 overflow-y-scroll scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-900 scrollbar-thumb-rounded scrollbar-track-rounded-full"
					>
						{/* Email & Name field */}
						<div className="grid gap-y-4">
							<div className="grid gap-2 grid-cols-1 items-center">
								<Label htmlFor="email">Your email address</Label>
								<Input
									type="email"
									placeholder="Email"
									{...register("email")}
								/>
								<p className="text-red-300 text-sm">{errors.email?.message}</p>
							</div>

							<div className="w-full sm:w-full">
								<Label htmlFor="subject">Your name</Label>
								<Input
									id="name"
									type="text"
									placeholder="Name"
									{...register("name")}
								/>
								<p className="text-red-300 text-sm">{errors.name?.message}</p>
							</div>
						</div>

						{/* Company name & Message field */}
						<div className="flex flex-col md:flex-row gap-4">
							<div className="md:w-3/4 sm:w-full">
								<Label htmlFor="email">Your company name</Label>
								<Input
									{...register("company")}
									type="text"
									placeholder="Company"
								/>
								<p className="text-red-300 text-sm">
									{errors.company?.message}
								</p>
							</div>

							<div className="md:w-3/4 sm:w-full">
								<Label htmlFor="email">Product</Label>
								<Input
									{...register("product")}
									type="text"
									placeholder="Product"
									defaultValue={product}
								/>
								<p className="text-red-300 text-sm">
									{errors.product?.message}
								</p>
							</div>
						</div>

						{/* Text Area field*/}
						<div>
							<Label htmlFor="message">Your message</Label>
							<Textarea
								id="message"
								placeholder="Message"
								className="h-28"
								{...register("message")}
							></Textarea>
							<p className="text-red-300 text-sm">{errors.message?.message}</p>
						</div>
						<DialogFooter>
							<Button variant={"custom"} type="submit">
								Submit
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default ProductDialogue;
