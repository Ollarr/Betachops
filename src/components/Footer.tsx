import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";

function Footer() {
	return (
		<footer className="flex flex-col lg:flex-row justify-between gap-6 bg-orange-600 rounded-tr-3xl text-gray-200 px-8 lg:px-24 py-6">
			<div className="">
				<h1 className="text-2xl font-semibold"> Our Newsletter </h1>
				<p>
					Be the first to learn of our Promo update and New Stock Alert. Enter
					Your Email Address Below.
				</p>
			</div>
			<div className="font-bold text-2xl cursor-pointer font-[Poppins]">
				<span className="text-3xl pt-2 text-black">B</span>
				<span className="text-3xl text-gray-200 pt-2">etashops</span>
				<div className="text-sm font-normal">
					<p>Betashops is a wholesome offline and online store in Nigeria ,</p>
					<p>offering nationwide delivery.</p>
					We carry a vast range of groceries including vegan products,
					cosmetics, home ware, kitchen utensils and more.
				</div>
			</div>
			<div>
				<div className="flex items-center gap-4">
					<BsTelephoneFill />
					<div>
						<h4>Call us:</h4>
						<p>08120000303</p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<MdLocationPin className="lg:text-3xl" />
					<div>
						<h4>Address:</h4>
						<p>69B, Mabila Barrack, Maitama. Abuja Nigeria </p>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<MdEmail className="text-md" />
					<div>
						<h4>Email:</h4>
						<p>Support@betashop.com </p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
