import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
	render() {
		return (
			<div>
				<Burger />
				<div>Burger</div>
				<div>Build Control</div>
			</div>
		);
	}
}


export default BurgerBuilder;