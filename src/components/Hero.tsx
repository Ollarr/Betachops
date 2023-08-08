import React, { useState, useEffect } from "react";
import Button from "./Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Image1 from "../assets/images/cheerful-african-american-guy-in-supermarket-choosing-fresh-grocery-using-phone.jpeg";
import Image2 from "../assets/images/couple-with-face-masks-shopping-for-fruits-in-supermarket.jpeg";
import Image3 from "../assets/images/cheerful-african-american-woman-in-supermarket-choosing-fresh-grocery-using-phone.jpeg";

function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // Adjust the number of slides
		}, 2000); // Autoplay interval: 2000ms (2 seconds)

		return () => clearInterval(interval); // Clear interval on component unmount
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: currentSlide,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<div>
			<section className="mt-16">
				<div className="container flex flex-col gap-y-4 justify-center mx-auto md:py-12  lg:flex-row lg:justify-between">
					<div className="flex flex-col text-center rounded-sm  lg:text-left px-12 py-8">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">
							We provide delivery within 30mins
						</h1>
						<p className=" mb-2 text-lg ">
							Home delivery and online reservation system for restaurants, cafe,
							food & groceries.
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Button>
								<a
									rel="noopener noreferrer"
									href="#"
									className="text-lg font-semibold rounded text-white">
									Shop now
								</a>
							</Button>
						</div>
					</div>
					<div className="w-full lg:w-1/2 h-full  relative px-4 lg:px-14">
						<Slider {...settings}>
							<div>
								<Image
									className="w-full h-full  object-cover"
									src={Image1}
									loading={"lazy"}
									alt="Image1"
								/>
							</div>
							<div>
								<Image
									className="w-full h-full object-cover"
									src={Image2}
									loading={"lazy"}
									alt="Image2"
								/>
							</div>
							<div>
								<Image
									className="w-full h-full  object-cover"
									src={Image3}
									loading={"lazy"}
									alt="Image3"
								/>
							</div>
						</Slider>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
