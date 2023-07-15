import HeroSection from "./components/HeroSection";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<section className="bg-customPrimary text-white">
				<div className=" w-5/6 mx-auto">
					{" "}
					<h1>Hello World1</h1>
					<h1>Hello World1</h1>
					<h1>Hello World1</h1>
				</div>
			</section>
		</main>
	);
}
