import React from "react";
import Checkout from "./../Checkout/checkout"
import "./modal.css";
import "./index.js";
import cancel from "./../assets/hamburger_imgs/cancel.svg";

export default class Modal extends React.Component {

	store = (e) => {

		e.preventDefault();

		const inputName = document.getElementById("name"),
			  inputEmail = document.getElementById("email"),
			  inputPhone = document.getElementById("phone"),
			  inputTxt = document.getElementById("textarea");

		localStorage.setItem("name", inputName.value);
		localStorage.setItem("email", inputEmail.value);
		localStorage.setItem("phone", inputPhone.value);
		localStorage.setItem("txt", inputTxt.value);

	}

	render() {
		
		return (
			<div>
				<div className="modal" id="modal" data-modal="1">
					<img src={cancel} alt="cancel" className="modal__cross"></img>
					<div className="form">
						<h2 className="form__heading">Fill the form below</h2>
						<form className="form__body">
							<div className="form__block">
								<div className="form__row">
									<input type="text" className="form__input" id="name" placeholder="Full name" name="user_name" />
								</div>
								<div className="form__row">
									<input type="email" className="form__input" id="email" placeholder="Email" name="user_email" />
								</div>
								<div className="form__row">
									<input type="number" className="form__input" id="phone" placeholder="Phone" name="user_phone" />
								</div>
								<textarea name="textarea" id="textarea" cols="45" rows="5" placeholder="Leave a comment" name="user_txt" ></textarea>
								<input onClick={ this.store } type="submit" className="form__button" value="Submit" />
							</div>
						</form>
					</div>
				</div>
				<div className="overlay" id="overlay-modal"></div>
				<Checkout />
			</div>
		);
	}
}
