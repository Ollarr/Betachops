import React from "react";
import FreshFood from "./FreshFood";
import FoodCupboard from "./FoodCupboard";
import Drinks from "./Drinks";
import Toiletries from "./Toiletries";
import Electronics from "./Electronics";

function Categories() {
	return (
		<div>
			<FreshFood />
			<FoodCupboard />
			<Drinks />
			<Toiletries />
			<Electronics />
		</div>
	);
}

export default Categories;
