import Image from "next/image";

export default function Education() {
	return (
		<section className="flex flex-col gap-20" id="education">
			<p className="title">Education</p>
			<div className="flex gap-5 companywise">
				<div className="companyIntro">
					<Image width={100} height={100} src="/kiit.png" alt="college logo" />
				</div>
				<div>
					<h1 className="companyname">KIIT University</h1>
					<small className="text-violet-800">Sā Vidyā Yā Vimuktayē</small>
					<p className="pointerTitle">
						Bachelor of Technology (B.Tech.) in Electronics and Electrical
						Engineering
					</p>
					<p>CGPA: 7.6</p>
				</div>
			</div>
		</section>
	);
}
