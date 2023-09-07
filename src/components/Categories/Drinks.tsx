/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Drinks() {
	const drinksData = [
		{
			id: 1,
			name: "Fanta",
			price: 3500,
			image:
				"https://www.supermart.ng/cdn/shop/files/sprnw1286_180x@2x.jpg?v=1688838110",
		},
		{
			id: 2,
			name: "CWAY refill water",
			price: 1500,

			image:
				"https://www.supermart.ng/cdn/shop/files/rspwxyz422_300x_2x_0205fd73-49fb-4957-945a-9dbb098546a1_300x@2x.webp?v=1690142380",
		},
		{
			id: 3,
			name: "Hollandia",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/spbvyo2102_220x@2x.png?v=1689066986",
		},
		{
			id: 4,
			name: "Bottled water",
			price: 1200,

			image:
				"https://www.supermart.ng/cdn/shop/files/1508946327351_okea193_eva_table_water_75_cl_pack_of_12_180x@2x.jpg?v=1689140320",
		},
		{
			id: 5,
			name: "5 Alive pulpy orange",
			price: 13500,

			image:
				"https://www.supermart.ng/cdn/shop/products/5-Alive-Pulpy-Orange-85-cl-x6-Supermart-ng-1647_300x@2x.jpg?v=1690439608",
		},
		{
			id: 6,
			name: "Schweppes ginger",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/aspar061_300x@2x.jpg?v=1689903945",
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
			<h2 className="text-2xl mb-4">Drinks </h2>
			<Carousel responsive={responsive} partialVisbile>
				{drinksData.map((item) => (
					<div key={item.id} className="">
						<div className="card w-60  ">
							<div className="flex flex-col border py-4 px-2 items-center justify-center">
								<img src={item.image} alt={item.name} className="w-40 h-56" />
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

export default Drinks;
