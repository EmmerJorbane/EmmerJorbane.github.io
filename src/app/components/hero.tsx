import { useState, useEffect } from 'react';
import { motion } from "motion/react";

const LINES = [
    "> initializing portfolio.exe...",
    "> loading skills.................[OK]",
    "> mounting projects..............[OK]",
    "> establishing contact link......[OK]",
    "> welcome.",
];

export function Hero() {
	const [visibleLines, setVisibleLines] = useState<number>(0);
	const [showCursor, setShowCursor] = useState<boolean>(true);
	
	useEffect(() => {
		if (visibleLines < LINES.length) {
			const t = setTimeout(
				() => setVisibleLines((v) => v + 1),
				420
			);
			return () => clearTimeout(t);
		} 
	}, [visibleLines]);

	useEffect(() => {
		const t = setInterval(() => setShowCursor((c) => !c), 530);
		return () => clearInterval(t);
	}, []);

	return (

		
	

}
