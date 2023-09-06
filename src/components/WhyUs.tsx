import React from "react";
import { FaBox } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";

function WhyUs() {
	return (
		<section className="text-center my-6 px-4">
			<h1 className="text-2xl mb-8">Why us?</h1>
			<div className="bg-indigo-600 text-white px-4 py-8 rounded-xl flex flex-col md:flex-row items-center gap-8 justify-around">
				<div className="flex space-x-4 items-center">
					<BiTimeFive className="text-2xl" />
					<div>
						<p>Save time, stress and money</p>
						<small>Order online today</small>
					</div>
				</div>
				<div className="flex space-x-4 items-center">
					<FaBox />
					<div>
						<p>Wide assortment</p>
						<small>Unlimited items</small>
					</div>
				</div>
				<div className="flex space-x-4 items-center">
					<CiDeliveryTruck className="text-2xl" />
					<div>
						<p>Delivery across the nation</p>
						<small>Home and office delivery</small>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyUs;
