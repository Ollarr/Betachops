import React from "react";
// import Layout from "../../components/Layout";
// import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FreshFood from "@/components/Categories/FreshFood";
import Footer from "../../components/Footer";
import Categories from "@/components/Categories";
import WhyUs from "@/components/WhyUs";
function LandingPage() {
	return (
		<div>
			<Hero />
			<WhyUs />
			<Categories />
			<Footer />
		</div>
	);
}

export default LandingPage;
