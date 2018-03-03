import React, {Component} from 'react';

import './SignInFormInputField.css';

class SignInFormInputField extends Component {
	render() {
		const {input, placeholder, id, type, className, htmlFor, label, meta} = this.props;
		const {touched, error} = meta;
		
		return (
			<div className="row">
				<div className="input-field col s12 sign-in-form-input-field">
					<input 
							{...input} 
							placeholder={placeholder} 
							id={id} 
							type={type} />

					<label 
							htmlFor={htmlFor}> {label} </label>

					<p className="validation-message right-align">
						<sub className="red-text"> {(touched && error) ? error : ''} </sub>
					</p>

				</div>
			</div>
		)
	}
}

export default SignInFormInputField;