import type { Point } from "./company";

export default function CompanyNotes({ pointer }: { pointer: Point }) {
	return (
		<div key={pointer.description}>
			<h1 className="pointerTitle">{pointer.title}</h1>
			<div>{pointer.description}</div>
			<div>
				<ul className="">
					{pointer.keyContributions?.map((keyCon) => (
						<li key={keyCon} className="list-disc list-inside text-slate-600">
							{keyCon}
						</li>
					))}
				</ul>
			</div>
			<div>{pointer.endingStatement}</div>
		</div>
	);
}
