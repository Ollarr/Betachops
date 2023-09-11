/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FoodCupboard() {
	const foodCupboardData = [
		{
			id: 1,
			category: "foodCupboard",
			name: "Semovita",
			price: 600,
			image:
				"https://www.supermart.ng/cdn/shop/files/1480692828943_spmrt471_golden_penny_semovita_500_g_180x@2x.jpg?v=1689119826",
		},
		{
			id: 2,
			category: "foodCupboard",
			name: "Golden Penny Macaroni",
			price: 550,

			image:
				"https://www.supermart.ng/cdn/shop/files/spcgps881_300x_2x_53bce12c-1de9-4eb9-85c3-f76bf68eb751_180x@2x.webp?v=1690142441",
		},
		{
			id: 3,
			category: "foodCupboard",
			name: "Knorr seasoning powder",
			price: 950,

			image:
				"https://www.supermart.ng/cdn/shop/files/narabc1435_220x@2x.png?v=1689105331",
		},
		{
			id: 4,
			category: "foodCupboard",
			name: "Nutzy",
			price: 800,

			image:
				"https://www.supermart.ng/cdn/shop/files/spxtyabc643_300x_2x_6f8f5de8-ddd5-4008-87b0-07b5dc193067_300x@2x.webp?v=1690142642",
		},
		{
			id: 5,
			category: "foodCupboard",
			name: "Green giant sweetcorn",
			price: 13500,

			image:
				"https://www.supermart.ng/cdn/shop/files/sprnw1338_300x_2x_0078d88c-2d43-43ee-a065-01c7b3916bf0_180x@2x.webp?v=1690142503",
		},
		{
			id: 6,
			category: "foodCupboard",
			name: "Titus Sardine",
			price: 800,

			image:
				"https://www.supermart.ng/cdn/shop/files/sprnw1336_300x_2x_39f9e909-3764-42a4-83c1-41de4c828977_300x@2x.webp?v=1690142464",
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
			<h2 className="text-2xl mb-4">Food Cupboard</h2>
			<Carousel responsive={responsive} partialVisbile>
				{foodCupboardData.map((item) => (
					<div key={item.id} className="">
						<div className="card w-60 cursor-pointer ">
							<div className="flex flex-col border py-4 items-center justify-center">
								<img src={item.image} alt={item.name} className="w-40 h-56" />
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

export default FoodCupboard;
