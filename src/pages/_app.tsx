import Layout from "../components/Layout";
import Header from "../components/Header";
import Categories from "../components/Categories";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LandingPage from "./home";
import ProductDetail from "./product/[category]/[productName]/[productId]";

export default function App({ Component, pageProps }: AppProps) {
	return (
		// <Layout>
		// 	<LandingPage />
		// 	{/* <ProductDetail /> */}
		// </Layout>
		<Component {...pageProps} />
	);
}
