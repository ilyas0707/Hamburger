import React from "react";
import "./checkout.css";
import "./check";
import Checked from "./../assets/hamburger_imgs/checked.svg";
 
export default class Checkout extends React.Component {

	render() {		
		return (
			<div className="checkout" id="checkout">
				<p className="line">Your order was accepted successfully!</p>
				<img src={Checked} className="checked jello-horizontal" />
				<a href="#" className="modal__confirm">Confirm</a>
			</div>
		);
	}
}


