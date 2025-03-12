export default function ProfileHome() {
	const currYear = new Date().getFullYear();
	return (
		<section className="flex profile gap-10">
			<div className="profileImage" />
			<div className="profileDescription">
				<p>
					Hi, This is Priyanka Gupta. I am a software developer. Currently
					employed as Senior Member of Technical Staff. With career of{" "}
					{currYear - 2015} Years, I have acquired knowledge in various domains.
					I have good exposure in technologies like NextJs, Angular, NodeJs,
					Java.
				</p>
				<p>Find me on social applications such as...</p>
			</div>
		</section>
	);
}
