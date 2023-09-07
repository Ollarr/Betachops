/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Toiletries() {
	const toiletriesData = [
		{
			id: 1,
			name: "Irish spring",
			price: 3500,
			image:
				"https://www.supermart.ng/cdn/shop/files/spar0874_180x@2x.jpg?v=1688683558",
		},
		{
			id: 2,
			name: "Veet hair removal",
			price: 1500,

			image:
				"https://www.supermart.ng/cdn/shop/files/OkeA3333_300x@2x.jpg?v=1689141720",
		},
		{
			id: 3,
			name: "Bic comfort razor",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/mega1385_bic_comfort_2_razor_5_pieces_180x@2x.jpg?v=1689141885",
		},
		{
			id: 4,
			name: "Johnson's cotton buds",
			price: 1200,

			image:
				"https://www.supermart.ng/cdn/shop/files/CITD2439_180x@2x.jpg?v=1688757019",
		},
		{
			id: 5,
			name: "Euthymol toothpaste",
			price: 13500,

			image:
				"https://www.supermart.ng/cdn/shop/files/11_1_180x@2x.jpg?v=1690560758",
		},
		{
			id: 6,
			name: "Listerine Mouthwash",
			price: 3500,

			image:
				"https://www.supermart.ng/cdn/shop/files/sptomw1063_listerine-mouthwash-coolmint_300x_2x_6829480a-42cf-4665-a951-7d6d5a2c9957_300x@2x.jpg?v=1690142602",
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
			<h2 className="text-2xl mb-4">Toiletries </h2>
			<Carousel responsive={responsive} partialVisbile>
				{toiletriesData.map((item) => (
					<div key={item.id} className="">
						<div className="card w-60  ">
							<div className="flex flex-col border py-4 items-center justify-center">
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

export default Toiletries;
