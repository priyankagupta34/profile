"use client";

import Navigation from "@/components/Navigation";
import ProfessionalCareer from "@/components/ProfessionalCareer";
import ProfileHome from "@/components/ProfileHome";

export default function Home() {
	return (
		<div className="w-screen skin px-20">
			<div className=" flex flex-col gap-10 ">
				<Navigation />
				<ProfileHome />
				<ProfessionalCareer />
				{/* <section></section> */}
				<footer>Created With &#10084;&#65039; by Priyanka</footer>
			</div>
		</div>
	);
}
