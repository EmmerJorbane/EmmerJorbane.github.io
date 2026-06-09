import { useState, useEffect } from 'react';
import { motion } from "motion/react";

const LINES = [
    "> initializing portfolio.exe...",
    "> loading skills.................[OK]",
    "> mounting projects..............[OK]",
    "> establishing contact link......[OK]",
    "> welcome.",
];

export default function Hero() {
	return (
		<section className="hero">
			<h1>Welcome</h1>
			<p>This is the hero section.</p>
		</section>
	);
}
