// plik scripts.js - sprawdzanie, czy wynik jest dodatni, czy ujemny
var a = prompt('Podaj wartość a');
var	b = prompt('Podaj wartość b');
var value = (a * a) + (2 * a * b) - (b * b);
if (value < 0) {
	alert('wynik ujemny')
}
else if (value > 0 ) {
	alert('wynik dodatni')
}
else {
alert('wynik równy zero')
}