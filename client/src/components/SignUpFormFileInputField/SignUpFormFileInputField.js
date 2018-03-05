import React, {Component} from 'react';
import FaImage from 'react-icons/lib/fa/image';

import profilePicturePlaceholder from './../../assets/profile-picture-placeholder.png';
import './SignUpFormFileInputField.css';

class SignUpFormFileInputField extends Component {

	render() {
		const {input, name, id, htmlFor} = this.props; 

		return (
			<div className="sign-up-form-file-input-field">
				<input 
					{...input}
					type="file" 
					name={name} 
					id={id} 
					className="inputfile" 
					value=''
					onChange={(e) => this.props.onProfilePictureSelect(e)}/>
				<label htmlFor={htmlFor}>
					<FaImage size={32} className="upload-photo" />
				</label>
			</div>
		)
	}
}

export default SignUpFormFileInputField;