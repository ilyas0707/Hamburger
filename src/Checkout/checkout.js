import React from "react";
import "./checkout.css";
import "./index.js";
import Checked from "./checked.svg";
 
export default class Checkout extends React.Component {

	render() {		
		return (
			<div className="checkout">
				<p className="line">Your order was accepted successfully!</p>
				<img src={Checked} className="checked jello-horizontal" />
			</div>
		);
	}
}


