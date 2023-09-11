import React, { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className="">
			<div className="flex flex-col ">
				<Navbar />

				<main>{children}</main>
			</div>
			{/* <*** /> */}
		</div>
	);
};

export default Layout;
