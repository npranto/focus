import React, {Component} from 'react';

import './SignInFormInputField.css'

class SignInFormInputField extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row">
				<div className="input-field col s12 m12 l12">
					<input 
						{...this.props.input} 
						placeholder={this.props.placeholder} 
						id={this.props.id} 
						type={this.props.type} 
						className={this.props.className} />
					<label htmlFor={this.props.htmlFor}> {this.props.label} </label>
		        </div>
	        </div>
		)
	}
}

export default SignInFormInputField;