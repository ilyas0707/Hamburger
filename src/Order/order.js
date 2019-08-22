import React from "react";
import "./order.css";
import Modal from "./../Modal/modal";

const Order = ({ addCheese , addMeat, addSalad, addTomato, deleteCheese , deleteMeat, deleteSalad, deleteTomato }) => {

	return (
		<div className="order__block">
			<div className="order__box">
				<div className="order__item">
					<p className="order__txt">Salad</p>
					<div className="order__btns">
						<a href="#" onClick={ deleteSalad } className="order__link inactive">Remove</a>
						<a href="#" onClick={ addSalad } className="order__link">Add</a>
					</div>
				</div>
				<div className="order__item">
					<p className="order__txt">Tomato</p>
					<div className="order__btns">
						<a href="#" onClick={ deleteTomato } className="order__link inactive">Remove</a>
						<a href="#" onClick={ addTomato } className="order__link">Add</a>
					</div>
				</div>
				<div className="order__item">
					<p className="order__txt">Cheese</p>
					<div className="order__btns">
						<a href="#" onClick={ deleteCheese } className="order__link inactive">Remove</a>
						<a href="#" onClick={ addCheese } className="order__link">Add</a>
					</div>
				</div>
				<div className="order__item">
					<p className="order__txt">Meat</p>
					<div className="order__btns">
						<a href="#" onClick={ deleteMeat } className="order__link inactive">Remove</a>
						<a href="#" onClick={ addMeat } className="order__link">Add</a>
					</div>
				</div>
				<div className="order__checkout"><input type="button" className="checkout__link" id="checkout__link" value="Order" disabled /></div>
			</div>
			<Modal />
		</div>
	);

};
export default Order;

