/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FreshFood() {
	const freshFoodData = [
		{
			id: 1,
			category: "freshFood",
			name: "Fresh Tomatoes",
			price: 3500,
			image:
				"https://www.supermart.ng/cdn/shop/files/1504602987194_rspwxyz64_tomatoes_-_big_basket_180x@2x.jpg?v=1689688689",
		},
		{
			id: 2,
			category: "freshFood",
			name: "Fresh chicken",
			price: 1500,

			image:
				"https://www.supermart.ng/cdn/shop/files/hubmt47_180x@2x.jpg?v=1692889611",
		},
		{
			id: 3,
			category: "freshFood",
			name: "Fresh carrot",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/spmt1066_180x@2x.jpg?v=1689133914",
		},
		{
			id: 4,
			category: "freshFood",
			name: "Fresh Pumpkin",
			price: 1200,

			image:
				"https://www.supermart.ng/cdn/shop/files/omwpxyz1006_180x@2x.jpg?v=1689075149",
		},
		{
			id: 5,
			category: "freshFood",
			name: "Fresh potatoes",
			price: 13500,

			image:
				"https://www.supermart.ng/cdn/shop/files/sprnw1131_180x@2x.jpg?v=1689134180",
		},
		{
			id: 6,
			category: "freshFood",
			name: "Fresh bell pepper",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/oyingbo020_180x@2x.jpg?v=1689904280",
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
			<h2 className="text-2xl mb-4">Fresh Food </h2>
			<Carousel responsive={responsive} showDots={true} partialVisbile>
				{freshFoodData.map((item) => (
					<div key={item.id} className="">
						<div className="card w-60 cursor-pointer ">
							<div className="flex flex-col border py-4 px-2 items-center justify-center">
								<img src={item.image} alt={item.name} className="w-full h-56" />
								<h3>{item.name}</h3>
								<h3>{item.price}</h3>
								<button className="bg-indigo-600 hover:bg-green-500 text-gray-200 px-2 py-1 rounded cursor">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}

export default FreshFood;
