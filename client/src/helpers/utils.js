export const containLettersOnly = (str) => {
	return str
		.split('')
		.some(char => {
			return !isLetter(char);
		}) ? false : true;
}

export const isLetter = (char) => {
	return char.length === 1 && /[A-Za-z]/.test(char);
}