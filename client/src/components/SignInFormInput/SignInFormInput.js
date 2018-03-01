import React, {Component} from 'react';

import './SignInFormInput.css';

class SignInFormInput extends Component {
	render() {
		return (
			<div className="input-field col s12">
				<input 
						{...this.props.input} 
						placeholder={this.props.placeholder} 
						id={this.props.id} 
						type={this.props.type} 
						className={this.props.className} />

				<label 
						htmlFor={this.props.htmlFor}> {this.props.label} </label>

				<p className="validation-message right-align">
					<sub className="red-text"> {(this.props.meta.touched && this.props.meta.error) ? this.props.meta.error : ''} </sub>
				</p>

			</div>
		)
	}
}

export default SignInFormInput;