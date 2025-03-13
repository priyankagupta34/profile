"use client";

import Education from "@/components/Education";
import Navigation from "@/components/Navigation";
import ProfessionalCareer from "@/components/ProfessionalCareer";
import ProfileHome from "@/components/ProfileHome";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div className="w-screen skin px-20">
			<div className=" flex flex-col gap-10 ">
				<Navigation />
				<ProfileHome />
				<Education />
				<Skills />
				<ProfessionalCareer />
				<footer>Created With &#10084;&#65039; by Priyanka</footer>
			</div>
		</div>
	);
}
