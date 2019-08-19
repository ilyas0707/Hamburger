import React from "react";
import "./modal.css";
import "./index.js";
import cancel from "./cancel.svg";

export default class Modal extends React.Component {

	  onSubmit(e) {
		e.preventDefault();

		fetch("mail.php", {
		 	method: "POST"
		})
	}

	render() {

		return (
			<div>
				<div className="modal" data-modal="1">
					<img src={cancel} alt="cancel" className="modal__cross"></img>
					<div className="form">
						<h2 className="form__heading">Fill the form below</h2>
						<form action="mail.php" className="form__body" method="POST" encType="multipart/form-data" onSubmit={this.onSubmit.bind(this)}>
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
								<textarea name="textarea" id="textarea" cols="45" rows="8" placeholder="Leave a comment" name="user_txt" ></textarea>
								<input type="submit" className="form__button" value="Submit" />
							</div>
						</form>
					</div>
				</div>
				<div className="overlay" id="overlay-modal"></div>
			</div>
		);
	}
}
