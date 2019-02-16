import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios';

const withErrorHandler = (WrappedComponent, anxios) => {
	return class extends Component {
		state = {
			error: null
		}

		componentDidMount() {
			axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			axios.interceptors.response.use(res => res, null, error => {
				this.setState({ error: error });
			});
		}

		errorConfirmedHandler() {
			this.setState({ error: null })
		}

		render() {
			return (
				<div>
					<Modal
						show={this.state.error}
						modalClosed={this.errorConfirmedHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</div>
			)
		}
	}
}

export default withErrorHandler;