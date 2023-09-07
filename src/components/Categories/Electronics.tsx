/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Electronics() {
	const electronicsData = [
		{
			id: 1,
			name: "Midea washer dryer front loader",
			price: 3500,
			image:
				"https://www.supermart.ng/cdn/shop/files/dbk2136_180x@2x.jpg?v=1689139699",
		},
		{
			id: 2,
			name: "Scanfrost cooker",
			price: 1500,

			image:
				"https://www.supermart.ng/cdn/shop/files/dbk1646_300x@2x.jpg?v=1688752806",
		},
		{
			id: 3,
			name: "LG Smart TV",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/dbk2012_300x@2x.jpg?v=1689133124",
		},
		{
			id: 4,
			name: "Rite-Tek blender",
			price: 1200,

			image:
				"https://www.supermart.ng/cdn/shop/files/SPARNW640_220x@2x.jpg?v=1688718672",
		},
		{
			id: 5,
			name: "CWAY water dispenser",
			price: 13500,

			image:
				"https://www.supermart.ng/cdn/shop/files/dbk3958_300x@2x.jpg?v=1689140680",
		},
		{
			id: 6,
			name: "PS5 Console",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/dbk2079_300x@2x.jpg?v=1689134634",
		},
	];

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
			partialVisibilityGutter: 20,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			partialVisibilityGutter: 20,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			partialVisibilityGutter: 20,
		},
	};

	return (
		<div className="px-12 mb-4">
			<h2 className="text-2xl mb-4">Electronics </h2>
			<Carousel responsive={responsive} partialVisbile>
				{electronicsData.map((item) => (
					<div key={item.id} className="">
						<div className="card w-60  ">
							<div className="flex flex-col border py-4 px-2 items-center justify-center">
								<img src={item.image} alt={item.name} className="w-full h-56" />
								<h3>{item.name}</h3>
								<h3>{item.price}</h3>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default Electronics;
