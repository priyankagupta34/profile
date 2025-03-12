import Image from "next/image";
import IconLink from "./IconLink";

export default function ProfileHome() {
	const currYear = new Date().getFullYear();
	return (
		<section className="flex profile gap-10" id="aboutme">
			<Image
				alt="profilepic"
				className="profileImage"
				width={100}
				height={100}
				src="/passport_size_photo.png"
			/>
			<div className="profileDescription">
				<p>
					Hi, I’m Priyanka Gupta, a passionate software developer with{" "}
					{currYear - 2015} years of experience in designing, developing, and
					delivering scalable applications. Currently, I work as a Senior Member
					of Technical Staff, contributing to high-impact projects and driving
					technical excellence. I have extensive experience across various
					domains and a strong technical background in modern web and backend
					technologies, including Next.js, Angular, Node.js, and Java. My
					expertise spans full-stack development, microservices architecture,
					cloud computing, and performance optimization. I thrive in dynamic
					environments, solving complex problems, and building robust, scalable
					solutions.
				</p>
				<p>
					You can connect with me on professional and technical platforms like
					such as...
					<IconLink icon="github" />
					<IconLink icon="leetcode" />
					<IconLink icon="linkedin" />
				</p>
			</div>
		</section>
	);
}
