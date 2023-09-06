import React, { useState, useEffect } from "react";
import Button from "./Button";
import Carousel from "react-multi-carousel"; // Replace with the actual package import
import "react-multi-carousel/lib/styles.css"; // Replace with the appropriate package styles import
import Image from "next/image";
import Image1 from "../assets/images/cheerful-african-american-guy-in-supermarket-choosing-fresh-grocery-using-phone.jpeg";
import Image2 from "../assets/images/couple-with-face-masks-shopping-for-fruits-in-supermarket.jpeg";
import Image3 from "../assets/images/cheerful-african-american-woman-in-supermarket-choosing-fresh-grocery-using-phone.jpeg";

function Hero() {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
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
					<div className="w-full lg:w-1/2 h-full  relative px-4">
						<Carousel
							responsive={responsive}
							swipeable={true}
							draggable={true}
							showDots={true}
							infinite={true}
							autoPlaySpeed={1000}
							keyBoardControl={true}
							customTransition="transform 300ms ease-in-out"
							transitionDuration={300}
							containerClass="carousel-container"
							itemClass="carousel-item"
							// removeArrowOnDeviceType={["tablet", "mobile"]}
						>
							<div className="firstImageContainer flex justify-between space-x-4 lg:px-6 ">
								<div>
									<Image
										className="w-72 h-[360px]  object-cover"
										src={Image1}
										loading={"lazy"}
										alt="Image1"
									/>
								</div>
								<div className="flex flex-col gap-y-4 justify-center">
									<div>
										<Image
											className="w-60 h-[150px]  object-cover "
											src={Image3}
											loading={"lazy"}
											alt="Image3"
										/>
									</div>
									<div>
										<Image
											className="w-60 h-[170px]  object-cover "
											src={Image2}
											loading={"lazy"}
											alt="Image2"
										/>
									</div>
								</div>
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
						</Carousel>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
