import Navigation from "@/components/Navigation";
import ProfileHome from "@/components/Home";

export default function Home() {
	return (
		<div className="w-screen skin px-20 pt-5">
			<div className=" flex flex-col gap-50 ">
				<Navigation />
				<ProfileHome />
				{/* <section></section> */}
				{/* <section></section> */}
				<footer>Created With &#10084;&#65039; by Priyanka</footer>
			</div>
		</div>
	);
}
