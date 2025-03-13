import useMounted from "@/hooks/useMounted";

export default function Navigation() {
	const mounted = useMounted();

	if (!mounted) return null;

	const clickHandler = (id: string) => {
		document
			?.getElementById(id)
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<nav className="text-white nav sticky top-0 flex justify-between">
			<h1 className="self-center text-3xl font-extralight">Priyanka Gupta</h1>
			<div className="flex flex-row ">
				<button
					type="button"
					className="navItem"
					onClick={() => clickHandler("aboutme")}
				>
					About Me
				</button>
				<button
					type="button"
					className="navItem"
					onClick={() => clickHandler("education")}
				>
					Education
				</button>
				<button
					type="button"
					className="navItem"
					onClick={() => clickHandler("skills")}
				>
					Skills
				</button>
				<button
					type="button"
					className="navItem"
					onClick={() => clickHandler("experience")}
				>
					Experience
				</button>
			</div>
		</nav>
	);
}
