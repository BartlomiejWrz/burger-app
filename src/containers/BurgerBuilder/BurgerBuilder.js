import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

	//consttructor (props) {
	//super (props);
	//	this.state ={...};
	//}

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		}
	}

	render() {
		return (
			<div>
				<Burger ingredients={this.state.ingredients} />
				<div>Build Control</div>
			</div>
		);
	}
}


export default BurgerBuilder;