"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FC } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem } from "@/components/ui/form";

interface QuoteSectionProps {}

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
		.string({ required_error: "Please select a product." })
		.nonempty({ message: "Please select a product." }),
	message: z
		.string({ required_error: "Please enter a message." })
		.nonempty({ message: "Please enter a message." })
		.min(4, { message: "Message must have at least 4 letters" }),
});

const optionsData = [
	{ value: "Office Equipments" },
	{ value: "Appliances" },
	{ value: "Garments" },
	{ value: "Advertising Goods" },
	{ value: "Awards & Citations" },
	{ value: "Corporate Giveaways" },
	{ value: "Collaterals" },
];

const QuoteSection: FC<QuoteSectionProps> = () => {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const {
		register,
		control,
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
				"service_nyun8ui",
				"template_y1gavut",
				templateParams,
				"M4-8XGAIYlMNLPlZp"
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
	};

	return (
		<>
			<section
				id="contact-section"
				className="bg-customPrimary text-white z-50"
			>
				<div className="w-5/6 pt-10 pb-20 mx-auto my-auto flex flex-col justify-center items-center gap-8">
					<h1 className="text-3xl text-center">Quote Now</h1>
					<Form {...form}>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col gap-4 w-full sm:w-1/2"
						>
							{/* Email & Name Field */}
							<div className="flex flex-col md:flex-row gap-4">
								<div className="md:w-3/4 sm:w-full">
									<Label htmlFor="email">Your email address</Label>
									<Input
										type="email"
										placeholder="Email"
										{...register("email")}
									/>
									<p className="text-red-300 text-sm">
										{errors.email?.message}
									</p>
								</div>

								<div className="md:w-3/4 sm:w-full">
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

								{/* Company & Product Field */}
								<div className="md:w-3/4 sm:w-full">
									<Label>Select a product</Label>
									<FormField
										control={control}
										name="product"
										render={({ field }) => (
											<FormItem>
												<Select
													onValueChange={field.onChange}
													value={field.value}
												>
													<SelectTrigger>
														<SelectValue placeholder="Select a Product" />
													</SelectTrigger>
													<SelectContent>
														{optionsData.map((option) => {
															return (
																<SelectItem
																	key={option.value}
																	value={option.value}
																>
																	{option.value}
																</SelectItem>
															);
														})}
													</SelectContent>
												</Select>
											</FormItem>
										)}
									/>
									<p className="text-red-300 text-sm">
										{errors.product?.message}
									</p>
								</div>
							</div>

							{/* Text Area */}
							<div>
								<Label htmlFor="message">Your message</Label>
								<Textarea
									id="message"
									placeholder="Message"
									className="h-32"
									{...register("message")}
								></Textarea>
								<p className="text-red-300 text-sm">
									{errors.message?.message}
								</p>
							</div>

							<Button
								type="submit"
								className="w-1/4 mx-auto"
								variant={"secondary"}
							>
								Submit
							</Button>
						</form>
					</Form>
				</div>
			</section>
		</>
	);
};

export default QuoteSection;
