import React, {Component} from 'react';

import './SignUpFormInputField.css';

class SignUpFormInputField extends Component {
	render() {
		const {input, placeholder, id, type, inputContainerSize, className, htmlFor, label, meta} = this.props;
		const {touched, error} = meta;
		
		return (
			<div className={`input-field col s12 ${inputContainerSize} sign-in-form-input-field`}>
				<input 
						{...input} 
						placeholder={placeholder} 
						id={id} 
						type={type} />
				<label 
						htmlFor={htmlFor}> {label} </label>

				<p className="validation-message right-align">
					<sup className="red-text"> {(touched && error) ? error : ''} </sup>
				</p>

			</div>
		)
	}
}

export default SignUpFormInputField;