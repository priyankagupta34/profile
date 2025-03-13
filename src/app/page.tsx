"use client";

import Education from "@/components/Education";
import Navigation from "@/components/Navigation";
import ProfessionalCareer from "@/components/ProfessionalCareer";
import ProfileHome from "@/components/ProfileHome";
import Skills from "@/components/Skills";
import useMounted from "@/hooks/useMounted";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Home() {
	const mounted = useMounted();
	const width = useWindowWidth();
	if (!mounted) return null;
	if (width < 1000)
		return <div className="mem">This is designed for Desktop view!</div>;

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
