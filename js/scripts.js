var anyWord = prompt('Podaj dowolne słowo, na które mam wymienić te Papugi');
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var splitResult = text.split (" ", 1);
var wordUpperCased = anyWord.toUpperCase();
var replacedWord = text.replace(splitResult, wordUpperCased);
function getTextLenght(replacedWord) {
	return replacedWord.lenght
};
var sentenceLenght = getTextLenght();
function getslicingPoint (sentenceLenght) {
	return +sentenceLenght / 2;
}
var slicingPoint = getslicingPoint();
console.log('Zdanie z podmienionym słowem ma ' +sentenceLenght);
console.log(wordUpperCased.length);
alert(replacedWord.slice(0, slicingPoint))