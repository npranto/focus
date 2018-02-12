import React, {Component} from 'react';

import './SignUpFormInputField.css'

class SignUpFormInputField extends Component {
	render() {
		return (
			<div className="sign-up-form-input-field row">	
				<div className="input-field col s12 m12 l12">
					<input 
						{...this.props.input} 
						placeholder={this.props.placeholder} 
						id={this.props.id}
						type={this.props.type}
						className={this.props.className} />
					<label 
						htmlFor={this.props.htmlFor}> {this.props.label} </label>
					<p className="red-text">
						{
							(this.props.meta.touched && this.props.meta.error) 
								? <sub> {this.props.meta.error} </sub>
								: <sub></sub>
						}
						
					</p>
		        </div>
	        </div>
		)
	}
}

export default SignUpFormInputField;