import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import "../styles/Nav.module.css";

import {
	AiOutlineMenu,
	AiOutlineClose,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import Button from "./Button";
import MarqueeText from "./MarqueeText";

const Navbar = () => {
	const Links = [
		{ name: "HOME", link: "/home" },
		{ name: "SHOP", link: "/shop" },
		{ name: "CONTACT", link: "/contact" },
	];
	const [open, setOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("");
	const router = useRouter();

	const handleLinkClick = (name: React.SetStateAction<string>) => {
		setActiveLink(name);
		setOpen(false);
	};

	useEffect(() => {
		setActiveLink(router.pathname);
	}, [router.pathname]);

	return (
		<nav className="z-40 w-full fixed top-0 left-0">
			<MarqueeText />
			<div>
				<div className="md:flex items-center justify-between bg-white shadow-md py-2 md:px-10 px-7">
					<div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
						<span className="text-3xl pt-2 text-orange-600">B</span>
						<span className="text-3xl text-indigo-600 pt-2">etashops</span>
					</div>

					<div
						onClick={() => setOpen(!open)}
						className="text-3xl text-black absolute right-8 top-16 cursor-pointer md:hidden">
						{open ? <AiOutlineClose /> : <AiOutlineMenu />}
					</div>
					<ul
						className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
							open ? "top-[60px] " : "top-[-490px]"
						}`}>
						{Links.map((link) => (
							<li
								key={link.name}
								className={`md:ml-8 text-md md:my-0 my-7 font-[nunito] ${
									activeLink === link.link
										? " border-solid border-2 p-[4px]"
										: ""
								}`}>
								<Link href={link.link}>
									<div
										title={link.name}
										onClick={() => handleLinkClick(link.link)}
										className="text-gray-800 hover:text-gray-400 duration-500">
										{link.name}
									</div>
								</Link>
							</li>
						))}
						<div className="flex ml-8 space-x-8">
							<Button>
								<Link href="/">SIGN IN</Link>
							</Button>
							<Button>
								<Link href="/">SIGN UP</Link>
							</Button>
						</div>
						<div className="text-black text-3xl md:px-6 py-4">
							<AiOutlineShoppingCart />
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
