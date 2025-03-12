import Image from "next/image";
import companies, { type Company } from "./company";
import CompanyNotes from "./CompanyNotes";

export default function ProfessionalCareer() {
	return (
		<section className="flex flex-col gap-20" id="experience">
			<p className="title">Professional Career</p>
			{companies.map((company: Company) => (
				<div className="flex gap-5 companywise" key={company.company}>
					<div className="companyIntro">
						<Image
							src={company.logoUrl}
							width={100}
							height={50}
							alt="company"
						/>
					</div>
					<div>
						<h1 className="companyname">{company.company}</h1>
						<small className="text-violet-800">{company.slogan}</small>
						{company.points?.map((pointer) => (
							<CompanyNotes key={pointer.title} pointer={pointer} />
						))}
					</div>
				</div>
			))}
		</section>
	);
}
