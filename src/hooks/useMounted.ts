import { useEffect, useState } from "react";

function useMounted() {
	const [mount, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return mount;
}

export default useMounted;
