import Navigation from "@/components/Navigation";

export default function Home() {
	const currYear = new Date().getFullYear();
	return (
		<div className="w-screen skin px-20 pt-5 overflow-hidden">
			<div className=" flex flex-col gap-50 overflow-x-auto">
				<Navigation />
				<section className="flex profile gap-10">
					<div className="profileImage" />
					<div className="profileDescription">
						<p>
							Hi, This is Priyanka Gupta. I am a software developer. Currently
							employed as Senior Member of Technical Staff. With career of{" "}
							{currYear - 2015} Years, I have acquired knowledge in various
							domains. I have good exposure in technologies like NextJs,
							Angular, NodeJs, Java.
						</p>
						<p>Find me on social applications such as...</p>
					</div>
				</section>
				{/* <section></section>
				<section></section> */}
				<footer>Created With &#10084;&#65039; by Priyanka</footer>
			</div>
		</div>
	);
}
