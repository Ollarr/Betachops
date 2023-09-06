import React, { useState, useEffect, useRef } from "react";

const MarqueeText = () => {
	const [position, setPosition] = useState(0);
	const textRef = useRef<HTMLDivElement | null>(null); // Specify the type
	useEffect(() => {
		const marqueeAnimation = () => {
			if (textRef.current) {
				const textWidth = textRef.current.getBoundingClientRect().width;
				if (position <= -textWidth) {
					setPosition(window.innerWidth); // Reset position when text goes out of view
				} else {
					setPosition(position - 1); // Scroll left
				}
			}
		};

		const animationInterval = setInterval(marqueeAnimation, 30); // Adjust speed as needed

		return () => {
			clearInterval(animationInterval);
		};
	}, [position]);

	return (
		<div
			className="w-screen bg-indigo-600 py-2"
			style={{
				whiteSpace: "nowrap",
				overflow: "hidden",
				position: "relative",
				// width: "100%",
			}}>
			<div
				ref={textRef}
				style={{
					transform: `translateX(${position}px)`,
					display: "inline-block",
				}}>
				<p className="text-white font-semibold">
					Welcome to Betashops - Your One-Stop Shop for All Your Needs! Call us,
					to place order - 09094333555 or Send us a message on Whatsapp -
					08120000303
				</p>
			</div>
		</div>
	);
};

export default MarqueeText;
