import useMounted from "@/hooks/useMounted";

export default function Navigation() {
	const mounted = useMounted();

	if (!mounted) return null;

	return (
		<nav className="text-white nav sticky top-0 flex justify-between">
			<h1 className="self-center text-3xl font-extralight">Priyanka Gupta</h1>
			<div className="flex flex-row-reverse ">
				<button
					type="button"
					className="navItem"
					onClick={() => {
						const element = document.getElementById("experience");
						const offset = 100;

						if (element) {
							// Adjust as needed

							const elementPosition =
								element.getBoundingClientRect().top + window.scrollY;
							window.scrollTo({
								top: elementPosition - offset,
								behavior: "smooth",
							});
						}
					}}
				>
					Experience
				</button>
				<button
					type="button"
					className="navItem"
					onClick={() =>
						document
							?.getElementById("education")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					Education
				</button>
				<button
					type="button"
					className="navItem"
					onClick={() =>
						document
							?.getElementById("aboutme")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					About Me
				</button>
			</div>
		</nav>
	);
}
