const getFirstName = (name) => {
	if (name && name.givenName) {
		return name.givenName;
	}
};

const getLastName = (name) => {
	if (name && name.familyName) {
		return name.familyName;
	}
};

const getFullName = (displayName, name) => {
	if (displayName) {
		return displayName;
	}
	if (name) {
		let name = '';
		if (name.givenName) {
			name += name.givenName;
		}
		if (name.familyName) {
			name += name.familyName;
		}
		return name;
	}
};

const getEmail = (emails) => {
	if (emails && emails.length > 0) {
		return emails[0].value;
	}
};

const getProfilePicture = (photos) => {
	if (photos && photos.length > 0) {
		return photos[0].value;
	}
};

const createNewUserObject = (profile) => {
	let newUser = {};
	if (profile.id) {
		newUser['userId'] = profile.id;
	}
	if (profile.name) {
		let fn = getFirstName(profile.name);
		let ln = getLastName(profile.name);
		if (fn) {
			newUser['firstName'] = fn;
		}
		if (ln) {
			newUser['lastName'] = ln;
		}
	}
	if (profile.emails) {
		let email = getEmail(profile.emails);
		if (email) {
			newUser['email'] = email;
		}
	}
	if (profile.displayName || profile.name) {
		let fullName = getFullName(profile.displayName, profile.name);
		if (fullName) {
			newUser['fullName'] = fullName;
		}
	}
	if (profile.photos) {
		let profilePicture = getProfilePicture(profile.photos);
		if (profilePicture) {
			newUser['profilePicture'] = profilePicture;
		}
	}
	return newUser;
};

module.exports = createNewUserObject;