const { sentences } = require("./database");

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

function getResponseInterval(min, max) {
	return Math.random() * (max - min) + min;
}

module.exports = { getRandomSentence, getResponseInterval };
