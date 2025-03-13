export default function Skills() {
	const currYear = new Date().getFullYear();
	const skills = [
		{ name: "NodeJs", exp: currYear - 2018 },
		{ name: "NextJs", exp: currYear - 2018 },
		{ name: "ReactJs", exp: currYear - 2018 },
		{ name: "Angular", exp: currYear - 2019 },
		{ name: "Typescript", exp: currYear - 2018 },
		{ name: "Python", exp: currYear - 2018 },
		{ name: "HTML", exp: currYear - 2018 },
		{ name: "CSS", exp: currYear - 2018 },
		{ name: "MongoDB", exp: currYear - 2018 },
		{ name: "SQLDB", exp: currYear - 2018 },
		{ name: "Kubernetes", exp: currYear - 2019 },
		{ name: "Docker", exp: currYear - 2019 },
	];
	return (
		<section className="flex flex-col gap-20" id="skills">
			<p className="title">Skills</p>
			<div className="skillCover">
				{skills.map((skill) => (
					<div key={skill.name} className="skill">
						<div>
							<div>{skill.name}</div>
							<div className="exp">{skill.exp} Years Of experience</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
