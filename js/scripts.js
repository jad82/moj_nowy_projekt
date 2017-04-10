var anyWord = prompt('Podaj dowolne słowo, na które mam wymienić te Papugi');
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var splitResult = text.split (" ", 1);
var wordUpperCased = anyWord.toUpperCase();
var replacedWord = text.replace(splitResult, wordUpperCased);
function getTextLength(replacedWord) {
	return replacedWord.length
};
var sentenceLength = getTextLength(replacedWord);
function getslicingPoint (sentenceLength) {
	return +sentenceLength / 2;
}
var slicingPoint = getslicingPoint(sentenceLength);
console.log('Zdanie z podmienionym słowem ma ' +sentenceLength);
console.log(wordUpperCased.length);
alert(replacedWord.slice(0, slicingPoint))