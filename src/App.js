import React from "react";
import Order from "./Order/order";
import Modal from "./Modal/modal";
import "./App.css";
import BurgerSet from "./BurgerSet/burgerset";

export default class Hamburger extends React.Component { 

	constructor(props, context) {
		super(props, context)

		this.state = {
			num: 20
		}

	}

	addSalad = () => {
		const { num } = this.state;
		const salad = document.querySelector("#saladIMG"),
			  clone = salad.cloneNode(true),
			  checkout = document.querySelector("#checkout__link");

		salad.classList.remove("dn");
		salad.classList.add("open");

		if (salad.classList.contains("open")) {
			salad.after(clone);
			checkout.removeAttribute("disabled");
			checkout.classList.add("pulsate");
			this.setState({ num: num + 10 });
		}
	}
	deleteSalad = () => {
		const { num } = this.state;
		const salad = document.querySelector("#saladIMG"),
			  checkout = document.querySelector("#checkout__link");

		if (salad.classList.contains("open")) {
			salad.classList.add("dn");
			salad.removeAttribute("id");
			this.setState({ num: num - 10 });
		}
		if ( num < 40 ) {
			checkout.classList.remove("pulsate");
		}
	}

	addTomato = () => {
		const { num } = this.state;
		const tomato = document.querySelector("#tomatoIMG"),
			  clone = tomato.cloneNode(true),
			  checkout = document.querySelector("#checkout__link");

		tomato.classList.remove("dn");
		tomato.classList.add("open");

		if (tomato.classList.contains("open")) {
			tomato.after(clone);
			checkout.removeAttribute("disabled");
			checkout.classList.add("pulsate");
			this.setState({ num: num + 15 })
		}
	}
	deleteTomato = () => {
		const { num } = this.state;
		const tomato = document.querySelector("#tomatoIMG"),
			  checkout = document.querySelector("#checkout__link");

		if (tomato.classList.contains("open")) {
			tomato.classList.add("dn");
			tomato.removeAttribute("id");
			this.setState({ num: num - 15 });
		}
		if ( num < 40 ) {
			checkout.classList.remove("pulsate");
		}
	}

	addCheese = () => {
		const { num } = this.state;
		const cheese = document.querySelector("#cheeseIMG"),
			  clone = cheese.cloneNode(true),
			  checkout = document.querySelector("#checkout__link");

		cheese.classList.remove("dn");
		cheese.classList.add("open");

		if (cheese.classList.contains("open")) {
			cheese.after(clone);
			checkout.removeAttribute("disabled");
			checkout.classList.add("pulsate");
			this.setState({ num: num + 20 })
		}
	}
	deleteCheese = () => {
		const { num } = this.state;
		const cheese = document.querySelector("#cheeseIMG"),
			  checkout = document.querySelector("#checkout__link");

		if (cheese.classList.contains("open")) {
			cheese.classList.add("dn");
			cheese.removeAttribute("id");
			this.setState({ num: num - 20 });
		}
		if ( num < 50 ) {
			checkout.classList.remove("pulsate");
		}
	}

	addMeat = () => {
		const { num } = this.state;
		const meat = document.querySelector("#meatIMG"),
			  clone = meat.cloneNode(true),
			  checkout = document.querySelector("#checkout__link");

		meat.classList.remove("dn");
		meat.classList.add("open");

		if (meat.classList.contains("open")) {
			meat.after(clone);
			checkout.removeAttribute("disabled");
			checkout.classList.add("pulsate");
			this.setState({ num: num + 30 })
		}
	}
	deleteMeat = () => {
		const { num } = this.state;
		const meat = document.querySelector("#meatIMG"),
			  checkout = document.querySelector("#checkout__link");

		if (meat.classList.contains("open")) {
			meat.classList.add("dn");
			meat.removeAttribute("id");
			this.setState({ num: num - 30 });
		}
		if ( num < 60 ) {
			checkout.classList.remove("pulsate");
		}
	}

	render() {

		const { num } = this.state

		return (
			<div className="wrapper">
				<div className="price" >
					<p className="price__txt">Your price: { num }</p>
				</div>
				<BurgerSet />
				<Order
				addSalad={this.addSalad} addTomato={this.addTomato} addCheese={this.addCheese} addMeat={this.addMeat}
				deleteSalad={this.deleteSalad} deleteTomato={this.deleteTomato} deleteCheese={this.deleteCheese} deleteMeat={this.deleteMeat} />
				<Modal />
			</div>
		);
	}
}

