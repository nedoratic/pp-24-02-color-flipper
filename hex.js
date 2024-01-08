const hexIndexes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const hexIndexesLength = hexIndexes.length;

const button = document.querySelector('.app__body__btn');
const value = document.querySelector('.app__body__value');

const max = hexIndexesLength;

const generateRandomNumber = () => Math.floor(Math.random() * max);

const pickRandomHexIndex = () => hexIndexes[generateRandomNumber()];

const generateRandomHexColorCode = () => {
	let newHexcolorCode = '#';
	for (let i = 0; i < 6; i++) {
		newHexcolorCode += pickRandomHexIndex();
	}
	return newHexcolorCode;
};

const renderRandomColor = () => {
	let newColor = generateRandomHexColorCode();
	document.body.style.backgroundColor = newColor;
	value.textContent = newColor;
};

button.addEventListener('click', renderRandomColor);
