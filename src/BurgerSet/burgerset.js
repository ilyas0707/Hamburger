import React from "react";
import "./burgerset.css";
import up from "../assets/hamburger_imgs/up.png";
import down from "../assets/hamburger_imgs/down.png";
import Salad from "../assets/hamburger_imgs/salad.png";
import Cheese from "../assets/hamburger_imgs/cheese.png";
import Meat from "../assets/hamburger_imgs/meat.png";
import Tomato from "../assets/hamburger_imgs/tomato.png";

const BurgerSet = () => {

	return (
		<div className="set__block">
			<div className="set__item after">
				<img src={up} alt="bread" className="set__img" />
				<img src={Salad} alt="bread" className="set__img dn" id="saladIMG" />
				<img src={Tomato} alt="bread" className="set__img dn" id="tomatoIMG" />
				<img src={Cheese} alt="bread" className="set__img dn" id="cheeseIMG" />
				<img src={Meat} alt="bread" className="set__img dn" id="meatIMG" />
			</div>
			<div className="set__item">
				<img src={down} alt="bread" className="set__img" />
			</div>
		</div>
	);
        
};

export default BurgerSet;


