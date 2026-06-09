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
		<section 
			className="hero"
			style={{ fontFamily: "'JetBrains Mono', monospace" }}
		>
			{/* grid overlay */}
			<div 
				className="grid-overlay" 
				style={{
					backgroundImage: "linear-gradient(rgba(0,255,65,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.03) 1px, transparent 1px)",
					backgroundSize: "40px 40px",
				}}
			/>

			{/* top bar */}
			<div 
				className="border"
				style={{ borderColor: "var(--border)" }}
			>
				<span 
					style={{ 
						color: "var(--primary)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
					}}
				>
					PORTFOLIO_v2.0.0
				</span>
				<nav className="nav">
					{["WORK", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							style={{ 
								color: "var(--muted-foreground)",
								fontSize: "0.7rem",
								letterSpacing: "0.2em", 
							}}
							className="nav-link"
							onMouseEnter={(e) => 
								(e.currentTarget.style.color = "var(--primary)")
							}
							onMouseLeave={(e) => 
								(e.currentTarget.style.color = "var(--muted-foreground)")
							}
						>
							{item}
						</a>
					))}
				</nav>
			</div>

			{/* terminal boot lines */}
			<div className="terminal">
				{LINES.slice(0, visibleLines).map((line, i) => (
					<motion.p
						key={i}
						initial={{ opacity: 0, x: -8}}
						animate={{ opacity: 1, x: 0}}
						transition={{ duration: 0.2}}
						style={{
							color:
								i === LINES.length - 1
									? "var(--primary)"
									: "var(muted-foreground)",
							fontSize: "0.75rem",
							letterSpacing: "0.05em",
							marginBottom: "0.25rem"
						}}
					>
						{line}
					</motion.p>
				))}
			</div>

			{/* main name block */}
			<div className="name">
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.8, duration: 0.4}}
					style={{
						color: "var(--muted-foreground)",
						fontSize: "0.7rem",
						letterSpacing: "0.3em",
						marginBottom: "0.75rem",
					}}
				>
					// CS UNDERGRADUATE · FRONTEND DEV
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.0, duration: 0.5 }}
					style={{
						fontFamily: "'JetBrains Mono', monospace",
						fontSize: "clamp(2.8rem, 8vw, 7rem)",
						fontWeight: 800,
						lineHeight: 0.92,
						letterSpacing: "-0.03em",
						color: "#e2e2e2"
					}}
				>
					EMMA
					<br />
					<span style={{ color: "var(--primary)" }}>
						JORDAN
					</span>
					<span
						style={{
							color: "var(--primary)",
							opacity: showCursor ? 1 : 0,
						}}
					>
						_
					</span>
				</motion.h1>

				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{
						delay: 2.4,
						duration: 0.6,
						ease: "easeOut",
					}}
					style={{
						height: "2px",
						background: "var(--primary)",
						transformOrigin: "left",
						marginTop: "1.5rem",
						marginBottom: "1.5rem",
						maxWidth: "320px"
					}}
				/>

			</div>




		</section>
	);

		
	

}
