import React, {Component} from 'react';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import {Field} from 'redux-form';
import axios from 'axios';

import SignUpFormFileInputField from './../SignUpFormFileInputField/SignUpFormFileInputField';
import ProfilePicturePlaceholder from './../../assets/profile-picture-placeholder.png';
import './AddProfilePicture.css';

class AddProfilePicture extends Component {

	render() {
		const {defaultPhoto, profilePictureUploadError} = this.props;

		return (
			<div className="add-profile-picture row">
				<div className="picture-preview-container center-align">
					<img src={defaultPhoto ? `${process.env.PUBLIC_URL}/uploads/${defaultPhoto.filename}` : ProfilePicturePlaceholder} alt="Preview of Profile Picture" />
				</div>
				<p className="center-align red-text"> {profilePictureUploadError ? profilePictureUploadError : ''} </p>	
				<div className="file-input-controls">
					<a className="tooltipped file-input-icons" data-position="left" data-delay="50" data-tooltip="Upload Photo">
						<Field 
							name="profilePictureUploadPhoto" 
							id="profilePictureUploadPhoto" 
							htmlFor="profilePictureUploadPhoto"
							onProfilePictureSelect={(e) => this.props.onProfilePictureSelectToPreview(e)}
							component={SignUpFormFileInputField} />						
					</a>
					{
						!defaultPhoto
							? (
								<a className="file-input-icons disabled" onClick={() => this.props.onRemoveProfilePicture()}>
									<FaTimesCircle size={32} className="remove-photo" />
								</a>
							)
							: (
								<a className="file-input-icons" onClick={() => this.props.onRemoveProfilePicture()} data-position="right" data-delay="50" data-tooltip="Remove Photo">
									<FaTimesCircle size={32} className="remove-photo" />
								</a>
							)
					}		
				</div>
			</div>
		)
	}
}

export default AddProfilePicture;