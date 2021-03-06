import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'

class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: ''
		}
	}

	render() {
		return (
			<div className={classes.Contact}>
				<h4>Enter your Contact</h4>
				<form >
					<input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
					<input className={classes.Input} type="email" name="email" placeholder="Your Mail"></input>
					<input className={classes.Input} type="text" name="street" placeholder="Street"></input>
					<input className={classes.Input} type="text" name="spostal" placeholder="Postal Code"></input>
					<Button btnType="Success">ORDER</Button>
				</form>
			</div>
		);
	}
}

export default ContactData;