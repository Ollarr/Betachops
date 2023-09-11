/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { productsData } from "../../../../data/productsData";
import Layout from "@/components/Layout";
import { useState } from "react";

function ProductDetail() {
	const router = useRouter();
	const { category, productId } = router.query;
	const [quantity, setQuantity] = useState(0);

	const handleIncreaseQuantity = () => {
		setQuantity(quantity + 1);
	};
	const handleDecreaseQuantity = () => {
		setQuantity(quantity - 1);
	};
	// Check if productId and category are defined and are strings
	if (typeof productId !== "string" || typeof category !== "string") {
		return <p>Invalid product or category</p>;
	}

	const product = productsData.find(
		(item) => item.id === parseInt(productId) && item.category === category
	);

	if (!product) {
		return <p>Product not found</p>;
	}

	return (
		<Layout>
			<section className="h-screen mt-48 px-16 flex space-x-32 ">
				<div>
					<img src={product.image} alt={product.name} className="w-40 " />
				</div>
				<div className="shadow-md h-72 px-2 py-5">
					<h2 className="text-2xl capitalize font-bold">{product.name}</h2>
					<hr className="w-80 my-4 font-semibold"></hr>
					<p>Price: {product.price}</p>
					<p>
						Sold by: <span className="font-bold"> Betashop</span>
					</p>
					<hr className="w-80 my-4 font-semibold"></hr>
					<p>Quantity</p>
					<div className="mb-2 flex space-x-4 items-center">
						<button onClick={handleDecreaseQuantity}>-</button>

						<p>{quantity}</p>

						<button onClick={handleIncreaseQuantity}>+</button>
					</div>

					<button className="bg-indigo-600 hover:bg-green-500 text-gray-200 px-2 py-1 rounded cursor">
						Buy Now
					</button>
					{/* other product details */}
				</div>
			</section>
		</Layout>
	);
}

export default ProductDetail;
