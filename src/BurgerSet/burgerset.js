import React from "react";
import "./burgerset.css";
import up from "../hamburger_imgs/up.png";
import down from "../hamburger_imgs/down.png";
import Salad from "../hamburger_imgs/salad.png";
import Cheese from "../hamburger_imgs/cheese.png";
import Meat from "../hamburger_imgs/meat.png";
import Tomato from "../hamburger_imgs/tomato.png";

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


