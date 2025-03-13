import { useCallback } from "react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

export default function IconLink({
	icon,
	backgroundColor = "bg-transparent",
	...props
}: {
	icon: "github" | "leetcode" | "linkedin" | "download";
	backgroundColor?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const iconFound = useCallback(() => {
		switch (icon) {
			case "github":
				return <FaGithub />;
			case "leetcode":
				return <SiLeetcode />;
			case "linkedin":
				return <FaLinkedinIn />;
			case "download":
				return <MdOutlineFileDownload />;
			default:
				return <span />;
		}
	}, [icon]);

	const clickHandler = () => {
		let href = "#";
		switch (icon) {
			case "github":
				href = "https://github.com/priyankagupta34";
				break;
			case "leetcode":
				href = "https://leetcode.com/u/cryptics/";
				break;
			case "linkedin":
				href = "https://www.linkedin.com/in/priyanka-gupta-/";
				break;
			case "download":
				return;
		}
		window.open(href, "_blank");
	};

	return (
		<button
			type="button"
			className={`icon cursor-pointer ${backgroundColor}`}
			onClick={clickHandler}
			{...props}
		>
			{iconFound()}
		</button>
	);
}
